const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema({
  queue: {
    type: { type: Number },
    value: [Number],
  },
  queueValue: {
    type: String,
  },
  tanggal: String,
});

const queueModel = mongoose.model("antrian", queueSchema);
module.exports = queueModel;
