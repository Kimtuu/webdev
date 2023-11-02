const express = require("express");
const app = express();
const PORT = 3001;

// define first route
app.get("/endpoint1", (req, res) => {
  res.send("This is the first endpoint.");
});

// second route
app.get("/endpoint", (req, res) => {
  res.send("This the 2nd endpoint");
});

//custo middleware
const notFoundcB = (req, res, next) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
};

app.use(notFoundcB);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
