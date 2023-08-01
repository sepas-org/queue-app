const express = require("express");
const router = express.Router();
const displayController = require("../../controllers/queue");
const { requireAuth } = require("../../middleware/session");

router.get("/next", requireAuth, displayController.nextQueue);
router.get("/add", displayController.addQueue);

module.exports = router;
