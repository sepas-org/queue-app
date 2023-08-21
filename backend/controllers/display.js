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
      //use aggregate to get riwayatmodel data group by date and sort by queueValue
      const result = await riwayatModel
        .aggregate([
          {
            $addFields: {
              day: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: { $toDate: { $multiply: ["$createdAt", 1000] } },
                },
              },
            },
          },
          {
            $group: {
              _id: "$day",
              data: { $push: "$$ROOT" },
            },
          },
          {
            $sort: { "data.antrian": -1 },
          },
          {
            $unwind: "$data",
          },
          {
            $match: { "data.status": true }, // Only include records with status true
          },
          {
            $project: {
              _id: "$data._id",
              nama: "$data.nama",
              nim: "$data.nim",
              keperluan: "$data.keperluan",
              antrian: "$data.antrian",
              tanggal: "$data.tanggal",
              status: "$data.status",
              admin: "$data.admin",
              createdAt: "$data.createdAt",
            },
          },
        ])
        .exec();
      return res.status(200).json({
        status: true,
        message: "HISTORY_FETCHED",
        data: result,
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
