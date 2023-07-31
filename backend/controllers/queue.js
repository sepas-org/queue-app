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
      queueValue++;
      let data = queue.push(queueValue);
      return res.status(200).json({
        status: true,
        message: "QUEUE_ADDED",
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

module.exports = new Queue();
