import React, { Component } from "react";
import Letter from "./Letter";
const hint = function () {
  return "Hint: no hint project not ready yet";
};
class Solution extends Component {
  render() {
    let arrayOfSolution = this.props.solution.split("");
    this.props.allLetters["A"] = true;

    return (
      <div>
        <h3>Hint :</h3>
        <h3>{this.props.hint}</h3>
        <h4>
          {arrayOfSolution.map((letter) => {
            if (this.props.allLetters[letter] == false) {
              return (
                <u>
                  <Letter letter={letter} />
                </u>
              );
            } else {
              return (letter = "_");
            }
          })}
        </h4>
      </div>
    );
  }
}
export default Solution;
