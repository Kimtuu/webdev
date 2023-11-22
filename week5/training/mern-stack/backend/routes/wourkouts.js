const express = require("express");
const Workout = require("../models/workoutModel");

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

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
