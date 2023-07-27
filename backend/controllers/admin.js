const AdminSchema = require("../models/Admin");
const bcrypt = require("bcryptjs");
class Admin {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw { code: 400, message: "Username is required" };
      }
      if (!password) {
        throw { code: 400, message: "Password is required" };
      }

      const checkUser = await AdminSchema.find({
        username: username,
      }).exec();
      if (checkUser.length > 0) {
        throw { code: 400, message: "Username already exist" };
      }

      const admin = new AdminSchema({
        username: username,
        password: password,
      });
      const saveAdmin = await admin.save();
      return res.status(200).json({
        status: true,
        message: "Admin created successfully",
        data: saveAdmin,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw { code: 400, message: "Username is required" };
      }
      if (!password) {
        throw { code: 400, message: "Password is required" };
      }

      const checkUser = await AdminSchema.find({
        username: username,
      }).exec();
      console.log();
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
}

module.exports = new Admin();
