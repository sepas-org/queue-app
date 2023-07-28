class Queue {

  let antrian = 0;
  let admin1 = 0;
  let admin2 = 0;
  let admin3 = 0;

  async queue(req, res) {
    try {
      if (req.body.user === "admin1") {
        antrian++;
        admin1 = antrian;
      } else if (req.body.user === "admin2") {
        this.antrian++;
        this.admin2 = this.antrian;
      } else if (req.body.user === "admin3") {
        this.antrian++;
        this.admin3 = this.antrian;
      }
      return res.status(200).json({
        status: true,
        data: {
          antrian: this.antrian,
          admin1: this.admin1,
          admin2: this.admin2,
          admin3: this.admin3,
        },
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
