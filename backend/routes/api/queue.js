const express = require("express");
const router = express.Router();
const queueController = require("../../controllers/queue");
const { requireAuth } = require("../../middleware/session");

router.get("/next", requireAuth, displayController.nextQueue);
router.post("/add", displayController.addQueue);

module.exports = router;