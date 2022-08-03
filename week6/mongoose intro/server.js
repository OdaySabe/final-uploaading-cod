// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });
// const Schema = mongoose.Schema;
// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
// });
// const Person = mongoose.model("person", personSchema);
// let p1 = new Person({
//   firstName: "David",
//   lastName: "Smith",
//   age: 25,
// });

// // Person.find({}, function (err, response) {
// //   console.log(response);
// // });
// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 });
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 });
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 });
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 });
// let inputs = [p2, p3, p4, p5];
// inputs.forEach((p) => p.save());

// Person.findById("62e8d9df0190de6887e25708", function (error, response) {
//   response.age += 1110;
//   response.save();
//   console.log(response);
// });
// Person.findByIdAndUpdate(
//   "62e8c65a5b30614940461dd0",
//   { age: 99999 },
//   { new: true },
//   function (error, response) {
//     console.log(response);
//   }
// );
// Person.findById("62e8d9df0190de6887e25707",function(error,response){
//     response.remove(function(err){})
// })
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });
const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
});
const Person = mongoose.model("person", personSchema);
app.get("/people", function (req, res) {
  Person.find({}, function (error, Person) {
    res.send(Person);
  });
});
const port = 4200;
app.listen(port, function () {
  console.log(`server lisiting on port ${port}`);
});
