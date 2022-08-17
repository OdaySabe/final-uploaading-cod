function ArrayOfLettersAndToLower(string) {
  string = string.toLowerCase();
  return string.split(" ");
}
function calculateCharCodValue(word) {
  valueCode = 0;
  for (i = 0; i < word.length; i++) {
    valueCode += word.charCodeAt(i) - 96;
  }
  return valueCode;
}
function getBiggestWord(word) {
  let result = {};
  ArrayOfLettersAndToLower(word).forEach((word) => {
    result[word] = calculateCharCodValue(word);
  });
  console.log(result);
  finalValue = 0;
  for (key in result) {
    if (result[key] > finalValue) {
      finalValue = key;
    }
  }
  return finalValue;
}
//console.log(getBiggestWord("hello my name is oday"));

///////Question 2 /////////
//1 , 3 , 5 , 4 , 6 , 2//
//////////Question 2 normal solution///
function UniqueCharacters(string) {
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length; j++) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }
  return true;
}
//console.log(UniqueCharacters("cat"));

///// Question 2 good solution////
function UniqueCharacters2(string) {
  let set = new Set();
  for (i = 0; i < string.length; i++) {
    if (!set.has(string[i])) {
      set.add(string[i]);
    } else {
      return false;
    }
  }
  return true;
}
//console.log(UniqueCharacters2("cat"));
////////Question 3 the maybe it works //////
function charsToLength(string) {
  let result = {};
  for (i = 0; i < string.length; i++) {
    if (!result[string.charAt(i)]) {
      result[string.charAt(i)] = 1;
    } else {
      result[string.charAt(i)]++;
    }
  }
  //console.log(result);
}
//charsToLength("aaabbcb");
///////Question 3 solution same of example///////
function charsToLength2(string) {
  let result = "";
  let count = 0;
  for (i = 0; i < string.length; i++) {
    result += string[i];
    count = 1;
    while (string[i] == string[i + 1]) {
      count++;
      i += 1;
    }
    result += count;
  }
  return result;
}
//console.log(charsToLength2("aaabbcb"));
//console.log(charsToLength2("aaba"));
///////Question 4 /////////
function camleCase(string) {
  let result = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += string.charAt(i + 1).toUpperCase();
      i++;
    } else {
      result += string[i];
    }
  }
  return result;
}
///console.log(camleCase("camel case word"));
/**qus5 */
add = function (a, b) {
  if (b == undefined) {
    return function (b) {
      return a + b;
    };
  } else {
    return a + b;
  }
};
//console.log(add(5, 2));
//console.log(add(5)(2));
////
/// Phases ///
let arr = [1, 1, 1, 1, 2, 2, 1, 66];
function solution(arr) {
  if (!arr || arr.length == 1) {
    return undefined;
  }
  let sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      continue;
    } else if (arr[i] > sum) {
      return arr[i];
    }
    sum += arr[i];
  }
  return undefined;
  // for (i = 1; i < arr.length; i++) {
  //   if (typeof arr[i] != "number") {
  //     continue;
  //   }
  //   let sum = 0;
  //   for (j = 0; j < i; j++) {
  //     if (typeof arr[j] != "number") {
  //       continue;
  //     }
  //     sum += arr[j];
  //   }
  //   if (sum < arr[i]) {
  //     return arr[i];
  //   }
  // }
}

//console.log(solution(arr));
//// qustion 2 find beggist number////
function findMax(first = undefined, second = undefined, third = undefined) {
  if (
    !first ||
    typeof first != "number" ||
    !second ||
    typeof second != "number" ||
    !third ||
    typeof third != "number"
  ) {
    return undefined;
  } else {
    if (second > first) {
      if (second > third) {
        return second;
      } else {
        return third;
      }
    } else if (first > third) {
      return first;
    }
    return third;
  }
}
//console.log(findMax(15, 12, 120));

//// challange ///
function longestSubString(string) {
  let arrayOfSubStrings = [];
  let lastPart;
  for (i = 0; i < string.length; i++) {
    let secondLoopBreak = false;
    for (j = i + 1; j < string.length; j++) {
      for (k = i; k < j; k++) {
        if (string[j] == string[k]) {
          arrayOfSubStrings.push(string.substring(i, j));
          secondLoopBreak = true;
          i = j;
          lastPart = i;
          break;
        }
      }
    }
  }
  arrayOfSubStrings.push(string.substring(lastPart, string.length));
  let beggistSubString = "";
  arrayOfSubStrings.forEach((a) => {
    if (a.length > beggistSubString.length) {
      beggistSubString = a;
    }
  });
  console.log(arrayOfSubStrings);
  return beggistSubString;
}
console.log(longestSubString("communication"));
