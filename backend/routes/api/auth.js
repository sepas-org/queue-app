const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const Admin = require("../../controllers/admin");

router.post("/register", Admin.register);
router.post("/login", upload.none(), Admin.login);
router.get("/logout", Admin.logout);

module.exports = router;
