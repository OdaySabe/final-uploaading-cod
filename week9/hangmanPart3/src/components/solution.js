import React, { Component } from "react";
import Letter from "./Letter";
const hint = function () {
  return "Hint: no hint project not ready yet";
};
class Solution extends Component {
  constructor() {
    super();
    this.state = {
      changeInSo: 0,
    };
  }

  returnLetterState = (letter) => {
    return this.props.returnLetterState(letter);
  };
  renderEachLetterOfSolution() {
    let arrayOfSolution = this.props.solution.split("");
    let lastRender = [];
    arrayOfSolution.forEach((letter) => {
      if (this.returnLetterState(letter) == true) {
        this.props.increaseScore(letter);
        lastRender.push(letter);
      } else {
        lastRender.push("_");
      }
    });
    return lastRender;
  }

  render() {
    return (
      <div>
        <h3>Hint :</h3>
        <h3>{this.props.hint}</h3>
        <h4>{this.renderEachLetterOfSolution()}</h4>
      </div>
    );
  }
}
export default Solution;
