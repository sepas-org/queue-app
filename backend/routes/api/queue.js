const express = require("express");
const router = express.Router();
const queueController = require("../../controllers/queue");
const jwtAuth = require("../../middleware/jwtAuth");

router.get("/next", jwtAuth(), queueController.takeQueue);
router.post("/add", queueController.addQueue);
router.post("/done", jwtAuth(), queueController.doneQueue);
router.delete("/cancel", jwtAuth(), queueController.cancelQueue);

module.exports = router;
