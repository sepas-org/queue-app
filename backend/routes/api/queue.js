const express = require("express");
const router = express.Router();
const displayController = require("../../controllers/queue");

router.get("/next", displayController.queue);

module.exports = router;
