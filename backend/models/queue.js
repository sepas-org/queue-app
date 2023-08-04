const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema(
  {
    antrian: {
      type: Number,
    },
    nama: {
      type: String,
    },
    nim: {
      type: String,
    },
    keperluan: {
      type: String,
    },
    tanggal: {
      type: String,
    },
    statustake: {
      type: Boolean,
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
