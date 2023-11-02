const express = require("express");
const app = express();
const port = 4000;

// Endpoint 1: Text Response
app.get("/textmessage", (req, res) => {
  res.send("This is a simple textmessage response.");
});

app.get("/jsonmessage", (req, res) => {
  const jSonData = {
    message: "this is an again updated JSON response",
    timestamp: new Date(),
  };
  res.json(jSonData);
});

app.get("/htmlmessage", (req, res) => {
  const htmlContent = `
  <html>
    <body>
      <h1>This is a simple html response.</h1>
      <p>With a paragraph</p>
    </body>
  </html>
    `;
  res.send(htmlContent);
});

app.get("/info", (req, res) => {
  let time = new Date();
  res.send(`
    <h1>Info Page</h1>
    ${time.toString()}
    `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// works
