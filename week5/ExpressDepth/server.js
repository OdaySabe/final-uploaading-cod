const express = require("express");
const app = express();
const path = require("path");

const api = require(`${__dirname}/roots/root.js`);
app.use("/", api);

app.use(express.static(path.join(__dirname, "page")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.listen(3000, function () {
  console.log("Server lisiting");
});
