const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Exercises", { useNewUrlParser: true });
const Schema = mongoose.Schema;
const solarSystemSchema = new Schema({
  palnets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  name: String,
  starName: String,
});
const PlanetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "solarSystem" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});
const VisitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const solarSystem = mongoose.model("solarSystem", solarSystemSchema);
const Planet = mongoose.model("Planet", PlanetSchema);
const Visitor = mongoose.model("Visitor", VisitorSchema);
let solsys = new solarSystem({ palnets: [], name: "tabanah", starName: "sun" });
let plnt = new Planet({ name: "earth", system: solsys, visitors: [] });
let visitor = new Visitor({
  name: "oday",
  homePlanet: plnt,
  visitedPlanets: [],
});
solsys.palnets.push(plnt);
plnt.visitors.push(visitor);
visitor.visitedPlanets.push(plnt);
solsys.save();
plnt.save();
visitor.save();
// ///////////1
Visitor.find({})
  .populate("visitedPlanets")
  .exec(function (err, visitors) {
    console.log(visitors[0].visitedPlanets);
  });
// ///////////2
Planet.find({})
  .populate("visitors")
  .exec(function (err, planet) {
    console.log("===========");
    console.log(planet[0].visitors);
  });

// //////////3
solarSystem
  .find({})
  .populate({ path: "palnets", populate: { path: "visitors" } })
  .exec(function (error, Solar) {
    console.log("====");
    Solar[0].palnets.forEach((planet) =>
      planet.visitors.forEach((visitor) => {
        console.log(visitor);
      })
    );
  });
