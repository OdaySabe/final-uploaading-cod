const express = require("express");
const mongoose = require("mongoose");
const api = require("./api");
const app = express();
const PORT = 4200;

mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);

app.listen(PORT, function () {
  console.log("server is listining");
});
