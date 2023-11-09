// tours routers

const express = require("express");

const toursController = require("../controllers/toursController");
const tourRouter = express.Router();

// Get All Tours
tourRouter.get("/", toursController.getAllTours);

// Get Single Tour by ID
tourRouter.get("/:id", toursController.getTourById);

// Create a New Tour
tourRouter.post("/", toursController.createTour);

// Update Tour by ID
tourRouter.put("/:id", toursController.updateTour);

// Delete Tour by ID
tourRouter.delete("/:id", toursController.deleteTour);

module.exports = tourRouter;
