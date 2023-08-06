const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueTemp = new Schema(
  {
    queueValue: {
      type: Number,
    },
    admin: {
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

const queueTempModel = mongoose.model("queueTemp", queueTemp);

module.exports = queueTempModel;
