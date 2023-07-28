class Display {
  async dashboard(req, res) {
    try {
      return res.status(200).json({
        status: true,
        message: `Hai ini display`,
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
