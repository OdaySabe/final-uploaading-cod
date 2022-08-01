const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "somecontent")));
/////
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

app.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

app.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});
app.get("/life", function (req, res) {
  res.send(42);
});

app.get("/landing/:username", function (req, res) {
  console.log("landing");
  res.send(`the user input ${req.params.username}`);
});

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
};
app.get("/getUser/:userID", function (req, res) {
  const id = req.params.userID;
  res.send(`the user quote of what you sent is ${users[id]}`);
});
app.get("/optionalQuery", function (req, res) {
  let query = req.query;
  res.send(query);
});

app.get("/details", function (req, res) {
  let obj = {
    zipecode: req.query.zipecode,
    city: req.query.city,
    middlename: req.query.middlename,
  };
  for (key in obj) {
    console.log(key, obj[key]);
  }
  res.send(obj);
});
const port = 3000;
app.listen(port, function () {
  console.log("server is listing now at port of ", port);
});
