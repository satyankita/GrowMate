
const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { promisify } = require("util");
const prisma = require("../prisma");

const scrypt = promisify(crypto.scrypt);

const router = express.Router();


const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const publicUser = ({ id, name, email, picture }) => ({ id, name, email, picture });
const createToken = (user) => jwt.sign(
  { userId: user.id, googleId: user.googleId || null, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

const hashPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = await scrypt(password, salt, 64);
  return `scrypt$${salt}$${hash.toString("hex")}`;
};

const verifyPassword = async (password, encoded) => {
  if (!encoded || !encoded.startsWith("scrypt$")) return false;
  const [, salt, expectedHex] = encoded.split("$");
  const expected = Buffer.from(expectedHex, "hex");
  const actual = await scrypt(password, salt, expected.length);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
};

const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post("/register", async (req, res) => {
  try {
    const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body.password === "string" ? req.body.password : "";
    const confirmPassword = typeof req.body.confirmPassword === "string" ? req.body.confirmPassword : "";
    if (!name || !email || !password || !confirmPassword) return res.status(400).json({ message: "Name, email, password and password confirmation are required." });
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match." });
    if (name.length > 100) return res.status(400).json({ message: "Name must be 100 characters or fewer." });
    if (!validEmail(email)) return res.status(400).json({ message: "Enter a valid email address." });
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      return res.status(400).json({ message: "Password must be at least 8 characters and contain a letter and a number." });
    }
    const existingUser = await prisma.user.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
    if (existingUser) {
      const message = existingUser.googleId && !existingUser.passwordHash
        ? "This email is registered with Google. Please continue with Google."
        : "An account with this email already exists. Try logging in.";
      return res.status(409).json({ message });
    }
    const user = await prisma.user.create({
      data: { name, email, passwordHash: await hashPassword(password) },
    });
    return res.status(201).json({ message: "Account created successfully.", token: createToken(user), user: publicUser(user) });
  } catch (error) {
    if (error.code === "P2002") return res.status(409).json({ message: "An account with this email already exists. Try logging in." });
    console.error("Registration Error:", error);
    return res.status(500).json({ message: "Could not create your account. Please try again." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body.password === "string" ? req.body.password : "";
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });
    if (!validEmail(email)) return res.status(400).json({ message: "Enter a valid email address." });
    const user = await prisma.user.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ message: "Email or password is incorrect." });
    }
    return res.json({ message: "Login successful.", token: createToken(user), user: publicUser(user) });
  } catch (error) {
    console.error("Email Login Error:", error);
    return res.status(500).json({ message: "Could not log in. Please try again." });
  }
});

// Google Login API
router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required",
      });
    }

    // Verify Google ID token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload.email || payload.email_verified !== true) {
      return res.status(401).json({ message: "Google email must be verified." });
    }
    const email = payload.email.trim().toLowerCase();
    const existingGoogleUser = await prisma.user.findUnique({ where: { googleId: payload.sub } });
    let user = existingGoogleUser;
    if (!user) {
      const sameEmailUser = await prisma.user.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
      if (sameEmailUser?.googleId && sameEmailUser.googleId !== payload.sub) {
        return res.status(409).json({ message: "This email is linked to a different Google account." });
      }
      user = sameEmailUser
        ? await prisma.user.update({ where: { id: sameEmailUser.id }, data: { googleId: payload.sub, picture: sameEmailUser.picture || payload.picture } })
        : await prisma.user.create({ data: { googleId: payload.sub, name: payload.name || email, email, picture: payload.picture } });
    } else {
      const emailOwner = await prisma.user.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
      if (emailOwner && emailOwner.id !== user.id) return res.status(409).json({ message: "This email belongs to a different GrowMate account." });
      user = await prisma.user.update({ where: { id: user.id }, data: { name: payload.name || user.name, email, picture: payload.picture || user.picture } });
    }

    // Create GrowMate JWT
    const token = createToken(user);

    res.status(200).json({
      message: "Google login successful",
      token,
      user: publicUser(user),
    });

  } catch (error) {
    console.error("Google Login Error:", error);

    res.status(401).json({
      message: "Google authentication failed",
    });
  }
});

module.exports = router;
