const session = require("express-session");
const express = require("express");

const requireAuth = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { requireAuth };
