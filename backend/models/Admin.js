const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: true,
  },
});
const AdminModel = mongoose.model("Admin", AdminSchema);
module.exports = AdminModel;
