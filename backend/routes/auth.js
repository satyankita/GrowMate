
const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma");

const router = express.Router();


const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

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

    // Save user in PostgreSQL
    const user = await prisma.user.upsert({
      where: {
        googleId: payload.sub,
      },
      update: {
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      },
      create: {
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      },
    });

    // Create GrowMate JWT
    const token = jwt.sign(
      {
        userId: user.id,
        googleId: user.googleId,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Google login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });

  } catch (error) {
    console.error("Google Login Error:", error);

    res.status(401).json({
      message: "Google authentication failed",
    });
  }
});

module.exports = router;
