const AdminSchema = require("../models/Admin");
class Admin {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw { code: 400, message: "Username is required" };
      }
      if (!password) {
        throw { code: 400, message: "Password is required" };
      }

      AdminSchema.find(
        { username: username, password: password },
        (err, result) => {
          if (err) {
            throw { code: 500, message: err.message };
          }
          if (result.length === 0) {
            throw { code: 404, message: "Username or password is wrong" };
          }
          return res.status(200).json({
            status: true,
            message: "Login success",
            data: result,
          });
        }
      );
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
}

module.exports = new Admin();
