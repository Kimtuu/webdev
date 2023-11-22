const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// POST new workout

router.post("/", createWorkout);

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE workout

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE new workout" });
});

module.exports = router;
