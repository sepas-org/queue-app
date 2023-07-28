class Queue {
  constructor() {
    this.queueValue = 0;
    this.queue = [];
  }

  async nextQueue(req, res) {
    try {
      let data = this.queue.shift();
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
      this.queueValue++;
      this.queue.push(this.queueValue);
      return res.status(200).json({
        status: true,
        message: `antrian ke ${this.queueValue}`,
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
