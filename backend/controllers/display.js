const riwayatModel = require("../models/riwayat");

class Display {
  async dashboard(req, res) {
    try {
      return res.status(200).json({
        status: true,
        message: `Hai ini display`,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }

  async history(res, req) {
    try {
      const history = await riwayatModel.find({ status: true });
      if (!history) {
        throw { code: 404, message: `HISTORY_NOT_FOUND` };
      }
      return res.status(200).json({
        status: true,
        message: `HISTORY_FETCHED`,
        data: history,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
}

module.exports = new Display();
