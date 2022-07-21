let str = "“aabcde”";
let arr = str.split("");
let count = 0;

const Vowel = function (charecter) {
  charecter = charecter.toLowerCase();
  if (
    charecter == "a" ||
    charecter == "e" ||
    charecter == "i" ||
    charecter == "o" ||
    charecter == "u"
  ) {
    return 1;
  }
  return 0;
};
arr.forEach((Ch) => (count += Vowel(Ch)));
console.log("Count Vowels");
console.log(count);
console.log("===============");
///////Median Number///////
let arrKeysValues = [];
let str2 = "question";
let arr2 = str2.split("");
let arr2temp = arr2;
for (i = 0; i < arr2.length; i++) {
  let key = arr2[i];
  let value = 0;
  arr2temp.forEach((a) => {
    if (a > arr2[i]) {
      value += 1;
    } else {
      value -= 1;
    }
  });
  arrKeysValues.push({ charecter: key, value: value });
}
Median = {
  check: arrKeysValues[0].value * -1,
  char: "",
};
const getClosestToZero = function (value, Achar) {
  if (value < 0) {
    value = value * -1;
  }
  if (Median.check > value) {
    Median.check = value;
    Median.char = Achar;
  }
};
arrKeysValues.map((a) => {
  getClosestToZero(a.value, a.charecter);
});
console.log("Median charecter and its value");
console.log(Median, Median.char + " " + Median.check);
console.log("===============");
//////Second Biggest////////
let input = [12, 3, 4, 7, 23];
input.sort((a, b) => a - b);
console.log("Second biggest number");
console.log(input);
console.log(input[input.length - 2]);
console.log("=======followed number========");

///////Followd number//////

let testArray = [0, 123, 1, 355, 2, 55, 66, 8, 7, 506, 505, 507];
let followed = [];
let Theset = new Set(testArray);
testArray.forEach((a) => {
  if (Theset.has(a - 1) || Theset.has(a + 1)) {
    followed.push(a);
  }
});
console.log(followed);
console.log("===============");

//////Remove Duplicate an Array////////
let DuplicatedArrray = [11, 1, 1, 2, 44, 1, 45, 6, 6, 6, 45, 44, 6];
let temp = [];
DuplicatedArrray.forEach((a) => {
  if (temp.indexOf(a) == -1) {
    temp.push(a);
  }
});
console.log(DuplicatedArrray);
console.log(temp);
console.log("====================");
///////Duplicate array write solution//////////
console.log("==========Doublacate array==============");
let DuplicatedArrray2 = [11, 1, 1, 2, 44];
let newArray = [];
const tem = JSON.stringify(DuplicatedArrray2);
newArray = JSON.parse(tem);
DuplicatedArrray2.forEach((a) => {
  newArray.push(a);
});
console.log(newArray);
console.log(DuplicatedArrray2);
console.log("========================");
//////////////Common Elements between arrays////////////////////
let T1 = [1, 2, 4, 9, 5, 6];
let T2 = [9, 4, 7, 1];
let T3 = [9, 8, 4, 1, 5, 6, 123, 1455, 1];
let set = new Set();
let resut = [];
for (i = 0; i < T1.length; i++) {
  set.add(T1[i]);
}
for (i = 0; i < T3.length; i++) {
  if (set.has(T3[i]) && set.has(T2[i])) {
    resut.push(T1[i]);
  }
}
console.log(resut);
console.log("========================");
// T1.forEach((a) => {
//   if (T2.indexOf(a) != -1) {
//     console.log(a);
//   }
// });
/////////////////////Reverse//////////////
let ins = [1, "w", "e", 2, "r", 7, 8];
let position = [];
for (i = 0; i < ins.length; i++) {
  if (typeof ins[i] === "number") {
    position.unshift(i);
  }
}
console.log(ins);
for (i = 0; i < position.length; i++) {
  const a = ins[position[i]];
  const b = ins[position[position.length - 1]];
  ins[position[position.length - 1]] = a;
  ins[position[i]] = b;
  position.pop();
}
console.log(ins);
///////////////////
let u = { a: "b", a2: ["first", "second"] };
let u1 = { b: u, b3: ["firtsY", u] };
const deepClone = function (y) {
  let obj = {};
  for (s in y) {
    obj[`${s}`] = y[`${s}`];
    if (typeof y[`${s}`] === "object") {
      obj[`${s}`] = deepClone(obj[`${s}`]);
    }
  }
  return obj;
};

let _obj1 = {
  a: "1",
  b: [
    1,
    { key: "a", innerObj: { arrr: ["YES"] } },
    3,
    { Matrix: [{ av: true, VALV: "GOOD" }] },
  ],
};
let _obj2 = deepClone(_obj1);
_obj2.b[1].key = "b";
_obj2.b[1].innerObj.arrr[0] = "NO";
_obj2.b[3].Matrix[0].VALV = "BAD";
console.log(_obj1);
console.log(_obj2);
