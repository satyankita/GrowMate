
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const classroomRoutes = require("./routes/classrooms");
const dailyGrowthRoutes = require("./routes/dailyGrowth");
const aiReflectionRoutes = require("./routes/aiReflection");
const authMiddleware = require("./middleware/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GrowMate Backend is running!");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Classroom routes
app.use("/api/classrooms", classroomRoutes);

// Daily Growth routes
app.use("/api/daily-growth", dailyGrowthRoutes);

// AI Reflection routes
app.use("/api/ai-reflection", aiReflectionRoutes);

// Protected test API
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Authentication successful!",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
