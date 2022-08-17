/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (number) {
  if (number == 1) return 1;
  else {
    return number * findFactorial(number - 1);
  }
  //Your code here
};

//Exercise 2
const reverseString = function (string) {
  if (string.length == 1) return string;
  return (
    string.charAt(str.length - 1) +
    reverseString(string.substring(0, string.length() - 1))
  );

  //Your code here
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  if (arr1.length == 0) return arr2;
  else {
    arr2.push(arr1.pop());
    swap(arr1, arr2);
  }
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
