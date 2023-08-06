const express = require("express");
const router = express.Router();
const queueController = require("../../controllers/queue");
const { requireAuth } = require("../../middleware/session");

router.get("/next", requireAuth, queueController.takeQueue);
router.post("/add", queueController.addQueue);
router.post("/done", requireAuth, queueController.doneQueue);
router.delete("/cancel", requireAuth, queueController.cancelQueue);

module.exports = router;
