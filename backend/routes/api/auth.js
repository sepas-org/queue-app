const express = require("express");
const router = express.Router();
const Admin = require("../../controllers/admin");

router.post("/register", Admin.register);
router.post("/login", Admin.login);
router.get("/logout", Admin.logout);

module.exports = router;
