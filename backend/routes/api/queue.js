const express = require("express");
const multer = require("multer");
const upload = multer();
const router = express.Router();
const queueController = require("../../controllers/queue");
const jwtAuth = require("../../middleware/jwtAuth");

router.get("/next", jwtAuth(), queueController.takeQueue);
router.post("/add", upload.none(), queueController.addQueue);
router.post("/done", upload.none(), jwtAuth(), queueController.doneQueue);
router.delete("/cancel", jwtAuth(), queueController.cancelQueue);

module.exports = router;
