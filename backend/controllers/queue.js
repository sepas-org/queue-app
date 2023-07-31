const queueModel = require("../models/queue");
const riwayat = require("../models/history");

var queue = [];
var queueValue = 0;

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
      let { fullname, nim, keperluan } = req.body;
      queueValue++;
      const obj = {
        queueValue,
        fullname,
        nim,
        keperluan,
        date,
      };
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
