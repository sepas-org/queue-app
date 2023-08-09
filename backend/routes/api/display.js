const express = require("express");
const router = express.Router();
const Display = require("../../controllers/display");
const jwtAuth = require("../../middleware/jwtAuth");

router.get("/dashboard", jwtAuth(), Display.dashboard);
router.get("/history", jwtAuth(), Display.history);

module.exports = router;
