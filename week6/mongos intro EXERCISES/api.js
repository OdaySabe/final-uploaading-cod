const express = require("express");
const router = express.Router();
const Person = require("./database");

router.get("/people", function (req, res) {
  Person.find({}, function (error, person) {
    res.send(person);
  });
});
router.post("/person", function (req, res) {
  let p = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  p.save();
  res.send(p);
});
router.put("/person/:id", function (req, res) {
  Person.findByIdAndUpdate(
    `${req.params.id}`,
    { age: 80 },
    { new: true },
    function (err, person) {
      res.send(person);
    }
  );
});
router.delete("/apocalypse", function (req, res) {
  Person.remove(function (err) {});
});
module.exports = router;
