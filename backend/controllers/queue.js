const queueModel = require("../models/queue");
const riwayatSchema = require("../models/history");

var queue = [];
var queueValue = 0;

var date = new Date().toLocaleDateString();

// will be executed when server start so it will get the last queue if the server is restarted
// const [buffer, _] = queueModel.find({ tanggal: date }).sort({ _id: -1 }).limit(1).exec();

// if (buffer) {
//   queue = buffer.queue;
//   queueValue = buffer.queueValue;
// }

class Queue {
  async nextQueue(req, res) {
    /**
     * untuk dapetin antrian selanjutnya
     * @api {get} /api/queue/next Get Next Queue
     */
    try {
      let data = queue.shift();
      if (!data) {
        throw { code: 400, message: "No queue" };
      }
      return res.status(200).json({
        status: true,
        message: "antrian selanjutnya",
        data,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }

  async addQueue(req, res) {
    try {
      let date = new Date().toLocaleDateString();
      let { nama, nim, keperluan } = req.body;
      queueValue++;
      const obj = {
        queueValue,
        nama,
        nim,
        keperluan,
        date,
      };
      const riwayat = new riwayatSchema({
        nama: nama,
        NIM: nim,
        keperluan: keperluan,
        antrian: queueValue,
        tanggal: date,
        status: false,
      });
      await riwayat.save();
      queue.push(obj);
      return res.status(200).json({
        status: true,
        message: "QUEUE_ADDED",
        queue,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }
}

module.exports = new Queue();
