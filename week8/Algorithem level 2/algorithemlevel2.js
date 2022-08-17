function printStarSeries(height, stars) {
  let print = "";
  let lastPrint = "";
  while (stars > 0) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < i; j++) {
        print += "*";
      }
      print += "\n";
    }
    for (let i = height; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        print += "*";
      }
      print += "\n";
    }
    lastPrint += print;
    print = "";
    stars--;
  }
  console.log(lastPrint);
}

//printStarSeries(5, 3);
////Qustion 2 ////
function reverseString(Inputstring) {
  let result = [];
  for (let i = 0; i < Inputstring.length / 2; i++) {
    let tempStart = Inputstring[i];
    let tempEnd = Inputstring[Inputstring.length - 1 - i];
    result[i] = tempEnd;
    result[Inputstring.length - 1 - i] = tempStart;
  }
  return result.toString().replace(/,/g, "");
}
//console.log(reverseString("mohammad Haj Mahmmood"));
///Qustion 3///
function firstNoNRepeated(string) {
  let nonRepeated = {};
  for (let i = 0; i < string.length; i++) {
    if (!nonRepeated[string[i]]) {
      nonRepeated[string[i]] = string[i];
    } else {
      delete nonRepeated[string[i]];
    }
  }

  return Object.keys(nonRepeated)[0];
}
//console.log(firstNoNRepeated("aabbccdee"));
//console.log(firstNoNRepeated("abca"));
///Challange Qustion//
function getMaxProfit(arrayStock) {
  let minIndex = 0;
  let minimumPrice = arrayStock[minIndex];
  let maximumPrince = 0;
  let biggestDifference = {
    minIndex: 0,
    maxIndex: 0,
    value: 0,
  };
  for (let i = 0; i < arrayStock.length; i++) {
    maximumPrince = arrayStock[i + 1];
    if (maximumPrince - minimumPrice < 0) {
      minIndex += 1;
      minimumPrice = arrayStock[minIndex];
    } else if (maximumPrince - minimumPrice > biggestDifference.value) {
      biggestDifference.value = maximumPrince - minimumPrice;
      biggestDifference.minIndex = minIndex;
      biggestDifference.maxIndex = i + 1;
    }
  }
  console.log(
    "best time is buy at " +
      arrayStock[biggestDifference.minIndex] +
      " and sell at " +
      arrayStock[biggestDifference.maxIndex] +
      "the Max progit is " +
      biggestDifference.value
  );
}
// console.log(getMaxProfit([10, 7, 5, 8, 5, 9])); // 4
// console.log(getMaxProfit([200, 150, 180, 300, 10, 150])); //150
// console.log(getMaxProfit([100, 50, 100, 30, 90])); //60
// console.log(getMaxProfit([100, 90, 90, 80, 80])); //0
// console.log(getMaxProfit([100, 90, 80, 60, 50])); //-10

////Qustion 4//
function encrypt(string) {
  let encryptString = "";
  for (let i = 0; i < string.length; i++) {
    encryptString += String.fromCharCode(string.charCodeAt(i) + 1);
  }
  console.log(encryptString);
}
//encrypt("hellow");

///Qustion 5//
function jumble(array1, array2) {
  let count1 = array1.length - 1;
  let count2 = array2.length - 1;
  let toRemoveDobulicate1 = new Set();
  let toRemoveDobulicate2 = new Set();
  let result = [];
  while (count1 > 0 || count2 > 0) {
    randomNum1 = Math.floor(Math.random() * array1.length);
    randomNum2 = Math.floor(Math.random() * array2.length);
    if (!toRemoveDobulicate1.has(array1[randomNum1]) && count1 > 0) {
      toRemoveDobulicate1.add(array1[randomNum1]);
      result.push(array1[randomNum1]);
      count1--;
    }
    if (!toRemoveDobulicate2.has(array2[randomNum2]) && count2 > 0) {
      toRemoveDobulicate2.add(array2[randomNum2]);
      result.push(array2[randomNum2]);
      count2--;
    }
  }
  let finalResult = [];
  let finalSet = new Set();
  for (let i = 0; i < result.length; i++) {
    if (!finalSet.has(result[i])) {
      finalSet.add(result[i]);
      finalResult.push(result[i]);
    }
  }
  console.log(finalResult);
}
const colors = ["red", "indigo", "white", "teal", "yellow", "yellow"];
const foods = ["bread", "cheese", "cucumber", "yellow"];
jumble(colors, foods);
////Qustion 6////
function getLetter() {
  const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20,
  };
  let objOfChances = {};
  let choosedLetter = { letter: "", chance: 0 };
  for (key in rawDist) {
    objOfChances[key] = Math.floor(Math.random() * 100) + rawDist[key];
    if (objOfChances[key] > choosedLetter.chance) {
      choosedLetter.letter = key;
      choosedLetter.chance = objOfChances[key];
    }
  }

  console.log(objOfChances);
  console.log(choosedLetter);
}
// getLetter();
///// Qustion 7 ///
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirstElement(value) {
    const firstNode = new Node(value);
    this.head = firstNode;
  }
  addFirst(value) {
    if (this.isEmpty()) {
      this.addFirstElement(value);
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }
  addLast(value) {
    if (this.isEmpty()) {
      this.addFirstElement(value);
    } else {
      const node = new Node(value);
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }
  printLinkList() {
    let tempNode = this.head;
    while (tempNode != null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }
  isEmpty() {
    return this.head == null;
  }
  reverseLinkList() {
    const reversedLinkList = new LinkedList();
    let temp = this.head;
    while (temp != null) {
      reversedLinkList.addFirst(temp.value);
      temp = temp.next;
    }
    console.log(" reversed is ");
    reversedLinkList.printLinkList();
  }
}
// const linklist = new LinkedList();
// linklist.addFirst(1);
// linklist.addFirst(2);
// linklist.addFirst(3);
// linklist.addFirst(4);
// linklist.addFirst(5);
// linklist.addFirst(6);
// linklist.addLast(7);
// linklist.printLinkList();
// linklist.reverseLinkList();
