const queueModel = require("../models/queue");
const riwayatSchema = require("../models/history");

var queueValue = 0;
var updatedtemp = 0;
var date = new Date().toLocaleDateString();

/**
 * will be executed when server start so it will get the last queue if the server is restarted
 *  */

const getQueue = async () => {
  const [buffer, _] = await queueModel.find({ tanggal: date }).sort({ _id: -1 }).limit(1).exec();

  return buffer;
};
getQueue().then((res) => {
  console.log(res);
  if (res) {
    queueValue = res.antrian;
  }
});

class Queue {
  async nextQueue(req, res) {
    /**
     * untuk dapetin antrian selanjutnya
     * @api {get} /api/queue/next Get Next Queue
     */
    try {
      getQueue().then((res) => {
        console.log(res.keperluan);
      });

      if (!res) {
        throw { code: 400, message: "No queue" };
      }

      return res.status(200).json({
        status: true,
        message: "antrian selanjutnya",
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
      let { nama, nim, keperluan } = req.body;
      queueValue++;
      const queue = new queueModel({
        antrian: queueValue,
        nama: nama,
        nim: nim,
        keperluan: keperluan,
        tanggal: date,
        statustake: false,
        admin: "no",
      });
      await queue.save();

      const riwayat = new riwayatSchema({
        nama: nama,
        NIM: nim,
        keperluan: keperluan,
        antrian: queueValue,
        tanggal: date,
        status: false,
      });
      await riwayat.save();

      return res.status(200).json({
        status: true,
        message: "QUEUE_ADDED",
        queue: queue,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }

  async getQueue(req, res) {
    try {
      const { user } = req.session;
      const [buffer] = await queueModel.find({ tanggal: date, statustake: false }).sort({ _id: -1 }).limit(1).exec();
      console.log(buffer);
      if (!buffer) {
        throw { code: 400, message: "No queue" };
      }
      const { antrian } = buffer;
      console.log(antrian);
      await queueModel.updateOne({ antrian: antrian, tanggal: date }, { statustake: true, admin: user });
      const [buffertemp] = await queueModel.find({ tanggal: date, statustake: true, admin: user }).sort({ _id: -1 }).limit(1).exec();

      return res.status(200).json({
        status: true,
        message: "QUEUE_GET",
        data: buffertemp,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }

  async doneQueue(req, res) {
    try {
      const { user } = req.session;
      await riwayatSchema.updateOne({ antrian: req.params.queueValue, tanggal: date }, { status: true, admin: user });
      return res.status(200).json({
        status: true,
        message: "QUEUE_DONE",
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
