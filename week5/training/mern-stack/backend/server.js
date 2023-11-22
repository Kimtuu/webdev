require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/wourkouts");

const port = process.env.PORT;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(port, () => {
  console.log("Listening on port", port);
});
