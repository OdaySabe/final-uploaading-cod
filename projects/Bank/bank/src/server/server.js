const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Transaction = require("../server/dataBase");
const bodyParser = require("body-parser");
const { response } = require("express");
const e = require("express");
let port = 3001;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mydb", {
  useNewUrlParser: true,
});
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.get("/transactions", function (req, res) {
  Transaction.find({}).exec(function (error, result) {
    if (error) {
      res.send(error);
    } else if (!result) {
      res.status(404).end();
    } else {
      res.send(result);
    }
  });
});
app.post("/transaction", function (req, res) {
  if (!req.body) {
    res.status(403).end();
  } else {
    const newTransaction = new Transaction({
      amount: req.body.amount,
      vendor: req.body.vendor,
      category: req.body.category,
    });
    newTransaction.save();
    res.end();
  }
});
app.delete("/transaction", function (req, res) {
  Transaction.findByIdAndRemove(req.body._id).exec(function (error, reslut) {
    if (error) {
      res.send(error).end();
    } else if (!reslut) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});
app.listen(port, function () {
  console.log(`Runnin runnin and runnin runnin on port ${port}`);
});
