///////////////Exirsises///////////////////////
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};
pushPull = function (type) {
  type();
};
pushPull(push);
pushPull(pull);
///////////////////////
const returnTime = function (time) {
  console.log("The current time is: " + time);
};

const getTime = function (callBack) {
  const time = new Date();
  callBack(time);
};
getTime(returnTime);
///////////////////////
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

// it will work just if we link the script with html page//displayData(alert, console.log, "I like to party");

///////////
const sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(1, 1, 1));
///////
const capitalize = (text) => {
  text = text.toLowerCase();
  let s = text.charAt(0).toUpperCase();
  text.substr(0, 1);
  return text;
};
console.log(capitalize("ABC"));
////////////////////
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
const commentOnWeather = (temp) => console.log("its " + determineWeather(temp));
commentOnWeather(30);
/////////////////////////////

const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

document.getElementById("box").onclick = function () {
  explode(shineLight, makeSound, "BOOM");
};
