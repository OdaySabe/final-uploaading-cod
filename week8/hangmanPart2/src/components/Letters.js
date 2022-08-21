import React, { Component } from "react";
import Letter from "./Letter";
class Letters extends Component {
  separateLetters(AllLetters) {
    let arrayOfLetters = [];
    for (let key in AllLetters) {
      arrayOfLetters.push(key);
    }
    return arrayOfLetters;
  }
  render() {
    this.props.letterStatus["O"] = true;
    this.props.letterStatus["D"] = true;
    this.props.letterStatus["Y"] = true;
    return (
      <div>
        {this.separateLetters(this.props.letterStatus).map((singleLetter) => {
          if (this.props.letterStatus[singleLetter] == false)
            return <Letter letter={singleLetter} />;
          return <Letter letter={singleLetter} clicked={true} />;
        })}
      </div>
    );
  }
}
export default Letters;
