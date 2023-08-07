const riwayatModel = require("../models/history");

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

  async history(req, res) {
    try {
      const history = await riwayatModel
        .find({ status: true })
        .sort({ queueValue: 1, tanggal: -1 })
        .exec();
      if (!history) {
        throw { code: 404, message: `HISTORY_NOT_FOUND` };
      }
      const data = history.map((item) => {
        return {
          queueValue: item.antrian,
          nama: item.nama,
          nim: item.NIM,
          keperluan: item.keperluan,
          tanggal: item.tanggal,
          admin: item.admin,
          createdAt: new Date(item.createdAt * 1000).toLocaleString("id-ID"),
          updatedAt: new Date(item.updatedAt * 1000).toLocaleString("id-ID"),
        };
      });
      return res.status(200).json({
        status: true,
        message: `HISTORY_FETCHED`,
        data,
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
