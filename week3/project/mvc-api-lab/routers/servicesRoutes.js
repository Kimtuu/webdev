// sercice routes

const express = require("express");
const servicesController = require("../controllers/servicesController");
const serviceRouter = express.Router();

const { checkRole } = require("../middleware/rolesMiddleware");

// Get All Services
serviceRouter.get("/", servicesController.getAllServices);

// Get Single Service by ID
serviceRouter.get("/:id", servicesController.getServiceById);

// Accessible only by users with the "admin" role

// Create a New Service
serviceRouter.post('/', checkRole('admin'), servicesController.createService);

// Update Service by ID
serviceRouter.put('/:id', checkRole('admin'), servicesController.updateService);

// Delete Service by ID
serviceRouter.delete('/:id', checkRole('admin'), servicesController.deleteService);

module.exports = serviceRouter;
