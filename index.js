require('./connect');
const express = require("express");
const multer = require('multer');
const app = express();
const db = require('./db');

app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "uploads");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
  })
}).single("user")

// "user" field name which is specified in api call in param section

app.post("/upload", upload, (req, res) => {
  res.send("File Uploaded")
})

app.listen(5000);