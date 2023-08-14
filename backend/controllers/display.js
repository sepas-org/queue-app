const riwayatModel = require("../models/history");
const queueTempModel = require("../models/queueTemp");

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;
var date = dd + "-" + mm + "-" + yyyy;

class Display {
  async dashboard(req, res) {
    try {
      const queueTemp = await queueTempModel.find({ tanggal: date }).exec();
      return res.status(200).json({
        status: true,
        queueTemp,
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
      const history = await riwayatModel.find({ status: true }).sort({ updatedAt: -1 }).exec();

      history.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });

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
          createdAt: new Date(item.createdAt * 1000).toLocaleDateString("id-ID"),
          updatedAt: new Date(item.updatedAt * 1000).toLocaleDateString("id-ID"),
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
