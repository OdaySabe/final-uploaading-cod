const express = require(`express`);
const app = express();
const path = require(`path`);
app.use(express.static(path.join(__dirname, "files")));
app.use(express.static(path.join(__dirname, "node_modules")));

///////////////
const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
app.get(`/priceCheck/:name`, function (req, res) {
  store.forEach((a) => {
    if (a.name === req.params.name) {
      res.send(a);
    }
  });
});
app.get(`/buy/:name`, function (req, res) {
  store.forEach((a) => {
    if (a.name === req.params.name) {
      a.inventory -= 1;
      res.send(a);
    }
  });
});
app.get(`/sale`, function (req, res) {
  if (req.query.admin === "true");
  res.send("true");
});
app.listen(3000, function () {
  console.log("server start lisiting ");
});
