const express = require("express");
const router = express.Router();
const Display = require("../../controllers/display");
const { requireAuth } = require("../../middleware/session");

router.get("/dashboard", requireAuth, Display.dashboard);
router.get("/history", requireAuth, Display.history);

module.exports = router;
