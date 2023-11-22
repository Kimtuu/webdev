require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const posts = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jimmy",
    title: "Post 2",
  },
];

// --------------get posts----------------
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});


// --------------authenticateToken----------------
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
