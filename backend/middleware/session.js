const session = require("express-session");
const express = require("express");
const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const requireAuth = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  }
  return res.status(401).json({ error: "Unauthorized" });
};

module.exports = { requireAuth };
