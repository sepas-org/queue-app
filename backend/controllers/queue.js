const queueModel = require("../models/queue");
const riwayatSchema = require("../models/history");

var queue = [];
var queueValue = 0;

var date = new Date().toLocaleDateString();

/**
 * will be executed when server start so it will get the last queue if the server is restarted
 *  */

// const getQueue = async () => {
//   const [buffer, _] = await queueModel
//     .find({ tanggal: date })
//     .sort({ _id: -1 })
//     .limit(1)
//     .exec();

//   return buffer;
// };

// const buffer = getQueue();
// console.log(buffer);
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
      if (queue.length !== 0) {
        const updateQueue = await queueModel({
          queue: queue,
          queueValue: queueValue,
          tanggal: date,
        });
        await updateQueue.save();
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

      return res.status(200).json({
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

  async getQueue(req, res) {
    try {
      if (queue.length === 0) {
        throw { code: 400, message: "No queue" };
      }
      const [buffer, _] = await queueModel
        .find({ tanggal: date })
        .sort({ _id: -1 })
        .limit(1)
        .exec();

      return res.status(200).json({
        status: true,
        message: "QUEUE_GET",
        data: buffer,
      });
    } catch (err) {
      return res.status(err.code || 500).json({
        status: false,
        message: err.message,
      });
    }
  }

  async done(req, res) {
    try {
      const { user } = req.session;
      await riwayatSchema.updateOne(
        { antrian: req.params.id },
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
}
module.exports = new Queue();
