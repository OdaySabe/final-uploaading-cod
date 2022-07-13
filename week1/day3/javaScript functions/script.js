const changeArray = function (arr) {
  let innerArray = [arr.length];
  for (index in arr) {
    innerArray[index] = arr[index];
  }
  innerArray[0] = 0;
  console.log(innerArray);
};

const numbers = [1, 2, 3];

console.log(numbers);
changeArray(numbers);
console.log(numbers);
console.log("===================");
const meow = function () {
  console.log("Meow");
};

const woof = function () {
  console.log("woof");
};

const getAnimalSoundFunc = function (animal) {
  if (animal == "cat") {
  }
  if (animal == "dog") {
    var x = 0;
  }
  console.log(x);
};
getAnimalSoundFunc("dog");
person = {
  name: "oday",
  duty: function (job) {
    console.log(job);
  },
};
person.duty("full stack developer");
console.log("=========EXCIRCISES================");
const checkEven = function (number) {
  if (number % 2 == 0) {
    return true;
  } else return false;
};
const checkEvenArray = function (arr) {
  for (element of arr) {
    if (element % 2 == 0) {
      console.log(element);
    }
  }
};
console.log(checkEven(8));
checkEvenArray([1, 2, 3, 4, 5, 6, 7, 8, 10]);

const checkExist = function (arr, number) {
  for (element of arr) {
    if (element === number) return true;
  }
  return false;
};
console.log(checkExist([1, 2, 3, 4, 5, 1], 7));
calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  sub: function (num1, num2) {
    return num1 - num2;
  },
};
console.log(calculator.add(5, 5), calculator.sub(5, 5));

function increaseByNameLength(money, name) {
  return (money = name.length * 100);
}
function makeRegal(name) {
  return "His Royal Highness, " + name;
}

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100);
