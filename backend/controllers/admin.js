const AdminSchema = require("../models/Admin");
const bcrypt = require("bcrypt");
const session = require("express-session");
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

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const admin = new AdminSchema({
        username: username,
        password: hashedPassword,
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
      console.log(username);
      if (!username) {
        throw { code: 400, message: "Username is required" };
      }
      if (!password) {
        throw { code: 400, message: "Password is required" };
      }

      const [checkUser, _] = await AdminSchema.find({
        username: username,
      }).exec();

      const isPasswordValid = await bcrypt.compareSync(password, checkUser.password);
      if (!isPasswordValid) {
        throw { code: 400, message: "PASSWORD_INVALID" };
      }
      req.session.authenticated = true;
      req.session.user = username;
      return res.status(200).json({
        status: true,
        message: "Admin logged in successfully",
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
  async logout(req, res) {
    try {
      req.session.destroy(() => {
        return res.status(200).json({
          status: true,
          message: "logout successfully",
        });
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
}

module.exports = new Admin();
