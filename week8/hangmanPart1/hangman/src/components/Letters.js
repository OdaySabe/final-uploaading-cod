import React, { Component } from "react";
class Letters extends Component {
  allLetters() {
    let arrayOfAllLetters = [];
    let char = "a";
    while (char != "z") {
      arrayOfAllLetters.push(char + " ");
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return arrayOfAllLetters;
  }
  render() {
    return <div>{this.allLetters()}</div>;
  }
}
export default Letters;
