const express = require("express");
const path = require("path");
const app = express();
data = {
  332: "book written by oday sabe",
  656: "hellow world",
  619: "ray",
};
const book = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};
app.use(express.static(path.join(__dirname, "files")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.get("/books/:userId", function (req, res) {
  res.send(data[req.params.userId]);
});
app.get("/detailed/:id", function (req, res) {
  res.send(book[req.params.id].author + " " + book[req.params.id].title);
});
const port = 3000;
app.listen(port, function () {
  console.log("server listining on port " + port);
});
