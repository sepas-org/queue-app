const express = require("express");
const router = express.Router();
const Admin = require("../../controllers/admin");
const { requireAuth } = require("../../middleware/session");

router.post("/register", Admin.register);
router.post("/login", Admin.login);
router.get("/logout", Admin.logout);

module.exports = router;
