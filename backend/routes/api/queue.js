const express = require("express");
const router = express.Router();
const queueController = require("../../controllers/queue");
const { requireAuth } = require("../../middleware/session");

router.get("/next", requireAuth, queueController.nextQueue);
router.post("/add", queueController.addQueue);

module.exports = router;
