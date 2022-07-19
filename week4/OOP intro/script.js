class Human {
  constructor(name, id, isFriendly, FirstChild) {
    this.name = name;
    this.id = id;
    this.isFriendly = isFriendly;
    this.children = [];
    this.children.push(FirstChild);
  }
  displayData(obj) {
    console.log(this.name, this.id, this.isFriendly);
    if (obj) obj.displayData();
  }
  addMoreChildren() {
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].map((a) => this.children.push(a));
      } else {
        this.children.push(arguments[i]);
      }
    }
    this.children.forEach((a) => console.log(a));
  }
}

human = {};
human["name"] = "Layla";
human["id"] = 1112222333;
human["isFriendly"] = false;
human.displayData = function () {
  console.log(this.name, this.id, this.isFriendly);
};

const H = new Human("oday", 1122332211, true, "to remove the undefind");
const H1 = new Human("Omar", 112209021, false);
H.displayData(human);
H.displayData(H1);
H.displayData();
console.log("===============");
H.addMoreChildren(
  "Qasem",
  "Ahmad",
  "Kareem",
  ["shareef", "Paltel", "Coolnet", "Nasser"],
  "Lotem",
  "mohammad",
  ["Array", "Array2"]
);
console.log("===============");
class Vihcale {
  static numberOfCars = 0;
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this.giveTheCarAspeed = speed;
    this.fuel = fuel;
    Vihcale.numberOfCars++;
    Vihcale.hasCars = true;
  }
  getThisCarInfo() {
    console.log(this.x, this.y, this.returnTheCarSpeed);
  }
  static getCarsInfo() {
    console.log(
      ` number of cars ${Vihcale.numberOfCars} has cars ? ${Vihcale.hasCars} `
    );
    Vihcale.calculateMoney();
  }
  static calculateMoney() {
    if (Vihcale.hasCars) {
      console.log(`Made ${Vihcale.numberOfCars * 30000} dollars`);
    } else {
      console.log("No cars sold yet");
    }
  }
  set giveTheCarAspeed(speed) {
    if (speed < 0) {
      console.log("cant set speed negative");
    } else {
      this._speed = speed;
    }
  }
  get returnTheCarSpeed() {
    return this._speed;
  }
  ////////////
  get fuel() {
    return this._fuel;
  }

  set fuel(amount) {
    if (amount > 150) {
      return console.log("Too much");
    }
    if (amount < 0) {
      return console.log("Not reasonable");
    }
    this._fuel = amount;
  }
}
Vihcale.hasCars = false;
Vihcale.getCarsInfo();
const car = new Vihcale(180, 45, 290, 10);
const car1 = new Vihcale(180, 45, 280, 15);
Vihcale.getCarsInfo();
const car2 = new Vihcale(180, 45, -1, 50);
Vihcale.getCarsInfo();
car.getThisCarInfo();
car1.getThisCarInfo();
car2.getThisCarInfo();
console.log(car2.fuel);
car2._fuel = 300;
console.log(car2._fuel);
/////////////////////////
