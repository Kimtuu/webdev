// routes/authRoutes.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const AuthController = require("../controllers/authController");
const config = require("../config");
const UserModel = require("../models/userModel");
router.post("/login", AuthController.login);

router.get("/users", authenticateToken, (req, res) => {
  const users = UserModel.getUsers();
  res.json(users);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(403);
  }

  jwt.verify(token, config.secretKey, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
}

module.exports = router;
