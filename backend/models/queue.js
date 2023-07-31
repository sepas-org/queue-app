const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema({
  queue: Object,
  queueValue: Number,
  Date: String,
});

const Queue = mongoose.model("Queue", queueSchema);
module.exports = Queue;
