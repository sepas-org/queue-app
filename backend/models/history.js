const mongoose = require("mongoose");
const { Schema } = require("mongoose");
require("dotenv").config();

const riwayatSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
    },
    NIM: {
      type: String,
    },
    keperluan: {
      type: String,
    },
    antrian: {
      type: String,
    },
    tanggal: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    admin: {
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
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

const riwayat = mongoose.model("riwayat", riwayatSchema);

module.exports = riwayat;
