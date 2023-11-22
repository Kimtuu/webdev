const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

// GET signle workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout by id" });
});

// POST new workout

router.post("/", (req, res) => {
  res.json({ mssg: "POST new workout" });
});

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE workout

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE new workout" });
});

module.exports = router;
