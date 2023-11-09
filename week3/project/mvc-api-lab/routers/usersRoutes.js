// routers/usersRoutes.js

const express = require("express");
const usersController = require("../controllers/usersController");
const userRouter = express.Router();

// Get All Users
userRouter.get("/", usersController.getAllUsers);

// Get Single User by ID
userRouter.get("/:id", usersController.getUserById);

// Create a New User
userRouter.post("/", usersController.createUser);

// Update User by ID
userRouter.put("/:id", usersController.updateUser);

// Delete User by ID
userRouter.delete("/:id", usersController.deleteUser);

module.exports = userRouter;
