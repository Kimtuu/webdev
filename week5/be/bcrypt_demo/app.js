const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

// In-memory storage for user data
// const users = [];
const users = [
  { username: "sami", password: "Strong#Password#" },
  { username: "rami", password: "Strong#Password#" },
];

// Endpoint for user registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already taken" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user data (in-memory storage for demonstration)
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
});

app.get("/users", (req, res) => {
  const userInformation = users.map((user) => {
    return { username: user.username, password: user.password };
  });

  res.status(200).json(userInformation);
});

app.post("/login", async (req, res) => {
  const user = users.find((user) => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("success");
    } else {
      res.send("incorrect password");
    }
  } catch (err) {
    res.status(500).send();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
