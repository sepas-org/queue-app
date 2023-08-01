const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema({
  queue: {
    type: Number,
  },
  queueValue: {
    type: Number,
  },
  tanggal: String,
});

const queueModel = mongoose.model("antrian", queueSchema);
module.exports = queueModel;
