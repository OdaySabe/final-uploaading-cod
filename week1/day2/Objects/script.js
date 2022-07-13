person = {
  name: "oday",
  age: 20,
  employeed: false,
};
console.log(person.name);
console.log(person["employeed"]);
person.lastName = "Sabe";
console.log(person.lastName);
p1 = {
  name: "jill",
  age: 22,
  city: "Nablus",
};
p2 = {
  name: "Robert",
  age: 24,
  city: "Ramallah",
};
console.log("=======");
if (p1.age == p2.age) console.log("same age");
else console.log("not same age");
if (p1.city === p2.city) console.log("same city");
else console.log("not same city");
if (p1.city == p2.city) console.log(p1.name + " want date " + p2.name);
else console.log(p1.name + " want date " + p2.name + " but cant");
console.log("===========");

book = {
  title: "",
  author: "",
};
library = {
  book,
};
book["title"] = "fullstack";
book["author"] = "mark";
console.log(library.book["title"], library.book.author);
console.log("===========");

const reservation = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

let user = prompt("enter your name please");
user = user.toLowerCase();
user = user.charAt(0).toUpperCase() + user.substring(1, user.length);
console.log(user);
let userName = user;
if (reservation[user]) {
  user = reservation[user];
  if (user.claimed) {
    console.log("welcome Mr " + userName);
  } else {
    console.log("Sorry Mr " + userName + " this not claimed");
  }
} else {
  console.log(
    "Sorry Mr " + userName + " there is no reservation and we will add you"
  );
  user = {
    claimed: true,
  };
  reservation[user] = user;
  console.log(
    "we added " + userName + " and sit claimed to " + user["claimed"]
  );
}
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};
if (kitchen.hasOven && kitchen.fridge["works"]) {
  console.log(
    kitchen.owner +
      " " +
      kitchen.fridge.items[1].name +
      " expired  " +
      (date - kitchen.fridge.items[1].expiryDate) +
      " days ago Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in 1"
  );
} else if (!kitchen.hasOven && kitchen.fridge["works"]) {
  console.log(
    kitchen.owner +
      " " +
      kitchen.fridge.items[1].name +
      " expired  " +
      (date - kitchen.fridge.items[1].expiryDate) +
      " Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in 2"
  );
} else if (kitchen.hasOven && !kitchen.fridge["works"]) {
  console.log(
    kitchen.owner +
      " " +
      kitchen.fridge.items[1].name +
      " expired  " +
      (date - kitchen.fridge.items[1].expiryDate) +
      "  Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the frid 3"
  );
} else {
  console.log(
    kitchen.owner +
      " " +
      kitchen.fridge.items[1].name +
      " expired  " +
      (date - kitchen.fridge.items[1].expiryDate) +
      "  Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge 4"
  );
}
