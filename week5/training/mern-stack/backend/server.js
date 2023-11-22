require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the App" });
});

// listen for requests
app.listen(port, () => {
  console.log("Listening on port", port);
});
