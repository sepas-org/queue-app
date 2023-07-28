const express = require("express");
const router = express.Router();
const Display = require("../../controllers/display");

router.get("/dashboard", Display.dashboard);

module.exports = router;
