const cat = {
  makeNoise: function () {
    console.log(this.noise);
  },
  noise: "meow",
};

const dog = {
  makeNoise: cat.makeNoise,
  noise: "woolf",
};
cat.makeNoise();
dog.makeNoise();
/////////////////////Excircises///////////////
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      hungry = false;
      console.log("Im no longer hungry!");
    }
  },
};

person.feed();
//////////////////////////
const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);
////////////////////////

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());
///////////////
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (number) {
    this.coinCount -= number;
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);
///////////////////////
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that.",
  revealItAll: function () {},
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
///////////////////////////////////////
const coffeeShop = {
  beans: 40,
  money: 30,
  buyBeans: function (numBeans) {
    this.beans += numBeans;
    this.money = this.money - numBeans;
  },
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 6 },
    doubleShot: { beanRequirement: 15, price: 4 },
    frenchPress: { beanRequirement: 12, price: 20 },
  },
  buyDrink: function (anyDrink) {
    if (this.makeDrink(anyDrink)) {
      this.money += this.drinkRequirements[`${anyDrink}`].price;
      console.log("our money after get paied (" + this.money + ")");
    }
  },
  makeDrink: function (drinkType) {
    if (this.drinkRequirements[`${drinkType}`]) {
      if (
        this.beans >= this.drinkRequirements[`${drinkType}`].beanRequirement
      ) {
        this.beans -= this.drinkRequirements[`${drinkType}`].beanRequirement;
        console.log("we make for you a " + drinkType);
        return true;
      } else {
        console.log("Sorry, we're all out of BEANS we will try to buy");
        console.log("Our Beans ", this.beans, "Our money ", this.money);
        let numBeans =
          this.drinkRequirements[`${drinkType}`].beanRequirement - this.beans;
        if (this.money >= numBeans) {
          console.log("Great we bought for you the beans");
          this.buyBeans(numBeans);
          this.beans -= this.drinkRequirements[drinkType].beanRequirement;
          console.log("we make for you a " + drinkType);
          console.log("Our Beans ", this.beans, "Our money ", this.money);
          return true;
        } else {
          console.log(
            "sorry we dont have enough money to buy for you a " + drinkType
          );
          return false;
        }
      }
    } else {
      console.log("Sorry, we don't make " + drinkType);
      return false;
    }
  },
};
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"coffeeShop.buyDrink("doubleShot");coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"coffeeShop.buyDrink("Wiskey"); //example from me
