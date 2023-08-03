const mongoose = require("mongoose");
const { Schema } = require("mongoose");
require("dotenv").config();

const riwayatSchema = new mongoose.Schema({
  nama: String,
  NIM: String,
  keperluan: String,
  antrian: String,
  tanggal: String,
  status: Boolean,
  admin: String,
});

const riwayat = mongoose.model("riwayat", riwayatSchema);

module.exports = riwayat;
