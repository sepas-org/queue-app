require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/api/auth");
const queueRoutes = require("./routes/api/queue");
const displayRoutes = require("./routes/api/display");
const app = express();

app.use(cors());
app.use(bodyParser.json());
const upload = multer();

app.use("/api/auth", authRoutes);
app.use("/api/queue", queueRoutes);
app.use("/api/display", displayRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
