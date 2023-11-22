const bcrypt = require("bcrypt");
const express = require("express");

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword };
  users.push(user);
  console.log(users);
  res.status(201).json(user);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not allowed");
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.listen(3000);
