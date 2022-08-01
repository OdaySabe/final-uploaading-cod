const express = require("express");
const router = express.Router();
const bodyP = require("body-parser");
router.use(bodyP.json());
router.use(bodyP.urlencoded({ extended: false }));
module.exports = router;
const wonders = [
  { name: "Mount Everest", location: "Nepal", visited: false },
  { name: "Grand Canyon", location: "Arizona", visited: false },
  { name: "Botanical Gardens", location: "Singapore", visited: true },
  { name: "Pantheon", location: "Greece", visited: false },
  { name: "Colosseum", location: "Italy", visited: true },
];
router.get("/wonder", function (req, res) {
  res.send(wonders);
});
router.post("/wonder", function (req, res) {
  console.log("Someone's trying to make a post request");
  console.log(req.body);
  wonders.push(req.body);
  res.send();
});
router.put("/wonder/:name", function (req, res) {
  wonders.forEach((a) => {
    if (a.name == req.body.name) {
      a.name = req.body.newName;
      res.send("updated");
    }
  });
});
