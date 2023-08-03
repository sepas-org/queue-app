const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema(
  {
    queue: {
      type: Array,
      value: Object,
    },
    queueValue: {
      type: String,
    },
    tanggal: {
      type: String,
    },
    createdAt: {
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

const queueModel = mongoose.model("antrian", queueSchema);
module.exports = queueModel;
