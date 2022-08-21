import React, { Component } from "react";
import Letter from "./Letter";
class Letters extends Component {
  returnLetterState = (letter) => {
    return this.props.returnLetterState(letter);
  };
  separateLetters(AllLetters) {
    let arrayOfLetters = [];
    for (let key in AllLetters) {
      arrayOfLetters.push(key);
    }
    return arrayOfLetters;
  }
  render() {
    return (
      <div>
        {this.separateLetters(this.props.letterStatus).map((singleLetter) => {
          return (
            <Letter
              state={this.returnLetterState(singleLetter)}
              letter={singleLetter}
              changeLetterState={this.props.changeLetterState}
            />
          );
        })}
      </div>
    );
  }
}
export default Letters;
