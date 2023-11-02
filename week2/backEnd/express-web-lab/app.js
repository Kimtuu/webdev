const express = require("express");
const app = express();
const port = 3001;

// Endpoint 1: Text Response
app.get("/text", (req, res) => {
  res.send("This is a simple text response.");
});

app.get("/json", (req, res) => {
  const jSonData = {
    message: "this is an again updated JSON response",
    timestamp: new Date(),
  };
  res.json(jSonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
