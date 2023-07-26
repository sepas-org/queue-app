require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
const upload = multer();

app.post("/api/number", upload.none(), (req, res) => {
  const number = req.body;
  console.log(number);
  try {
    res.status(400).json({
      status: "success",
      error: false,
      message: "Passing number successfully",
      data: number,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      status: "error",
      error: true,
      message: "Parsing number failed",
    });
  }
});

app.get("/api/display", (req, res) => {
  try {
    res.status(200).json({ number: 23 });
  } catch (e) {
    console.log(e);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
