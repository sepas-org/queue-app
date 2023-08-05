const riwayatSchema = require("../models/history");
const queueModel = require("../models/queue");
const queueTempModel = require("../models/queueTemp");

var date = new Date().toLocaleDateString();

const getQueue = async () => {
  const [buffer, _] = await queueModel
    .find({ tanggal: date })
    .sort({ _id: -1 })
    .limit(1)
    .exec();

  return buffer;
};

class Queue {
  async takeQueue(req, res) {
    /**
     * untuk dapetin antrian selanjutnya
     * @api {get} /api/queue/next Get Next Queue
     */
    try {
      const admin = req.session.user;
      const queueTemp = await queueTempModel
        .findOne({ admin: admin, tanggal: date })
        .exec();
      if (queueTemp) {
        throw { code: 400, message: "Antrian belum selesai", data: queueTemp };
      }

      let { queue, queueValue } = await getQueue();
      if (queue.length === 0) {
        throw { code: 400, message: "No queue" };
      }

      let temp = queue.shift();

      await queueTempModel.create({
        queueValue: temp.queueValue,
        admin: admin,
        tanggal: date,
      });
      // queueValueTemp = temp.queueValue;
      const updateQueue = await queueModel({
        queue: queue,
        queueValue: queueValue,
        tanggal: date,
      });
      await updateQueue.save();

      return res.status(200).json({
        status: true,
        message: "antrian selanjutnya",
        data: temp,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
        data: err.data,
      });
    }
  }

  async addQueue(req, res) {
    try {
      let queue = [];
      let queueValue = 0;
      let buffer = await getQueue();
      if (buffer) {
        queue = buffer.queue;
        queueValue = buffer.queueValue;
      }

      let { nama, nim, keperluan } = req.body;
      queueValue++;
      const obj = {
        queueValue,
        nama,
        nim,
        keperluan,
        date,
      };
      queue.push(obj);
      const queueDb = new queueModel({
        queue: queue,
        queueValue: queueValue,
        tanggal: date,
      });
      await queueDb.save();

      const riwayat = new riwayatSchema({
        nama: nama,
        NIM: nim,
        keperluan: keperluan,
        antrian: queueValue,
        tanggal: date,
        status: false,
      });
      await riwayat.save();

      return res.status(201).json({
        status: true,
        message: "QUEUE_ADDED",
        queue: queue[queue.length - 1],
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
      const { queueValue } = req.query;
      await queueTempModel.deleteOne({ admin: user });
      await riwayatSchema.updateOne(
        { antrian: queueValue, tanggal: date },
        { status: true, admin: user }
      );
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

  async cancelQueue(req, res) {
    try {
      const { user } = req.session;
      const deleteQueue = await queueTempModel.deleteOne({ admin: user });
      console.log(deleteQueue);

      return res.status(200).json({
        status: true,
        message: "QUEUE_CANCELED",
        data: deleteQueue,
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
