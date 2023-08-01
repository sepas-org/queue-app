const mongoose = require("mongoose");
const { Schema } = require("mongoose");
require("dotenv").config();

const riwayatSchema = new mongoose.Schema({
  nama: String,
  NIM: String,
  keperluan: String,
  antrian: Number,
  tanggal: String,
});

const riwayat = mongoose.model("riwayat", riwayatSchema);

module.exports = riwayat;

// const perform = async () => {
//   await mongoose
//     .connect(process.env.MONGO_URL)
//     .then(async () => {
//       console.log("Database connected");

//       const createdRecord = await Riwayat.create({ nama: "Julpan", age: 34 });
//       console.log("New record created: ", createdRecord);

//       const record = await Riwayat.find();
//       console.log(record);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// exports.default = perform;
