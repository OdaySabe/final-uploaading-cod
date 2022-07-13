const first = function (callback) {
  setTimeout(function () {
    console.log("should be first");
    callback();
  }, 3000);
};

const second = function () {
  console.log("should be second");
};

first(second);
console.log("========fixing the first function===========");
let users = [];

const getData = function (displayDataParamert) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    displayDataParamert(users);
  }, 3000);
};

const displayData = function (user) {
  console.log("Going to display the array");
  for (aUser of user) {
    console.log(aUser.name);
  }
};
getData(displayData);

const timer = function () {
  console.log(new Date());
};
const setInterval = function (Timer, seconds) {
  setTimeout(function () {
    console.log("===================");
    Timer();
  }, seconds);
};
setInterval(timer, 3000);
const arrow1 = () => {
  console.log("arrow1");
};
const arrow2 = (print) => {
  console.log(print);
};
const arrow3 = (print) => console.log(print);
const square = (num) => console.log(num * num);
arrow1();
arrow2("arrow2");
arrow3("arrow3");
square(4);
const getFormalTitle = (param1, param2) => param1 + " " + param2;
console.log(getFormalTitle("Oday", "Sabe"));
//////////////////////////////

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");

    setTimeout(() => {
      //normal function
      console.log("The name is: " + this.name);
    }, 3000);
  },
};

suspenseBuilder.displayName();
////////////////////////
