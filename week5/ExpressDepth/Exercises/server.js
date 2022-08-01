const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const api = require(`${__dirname}/route/api.js`);
app.use("/", api);
app.use(express.static(path.join(__dirname, "/page")));
app.use(express.static(path.join(__dirname, "/node_modules")));
app.listen(port, function () {
  console.log("server start lisiting on port " + port);
});
