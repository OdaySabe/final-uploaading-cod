import logo from "./logo.svg";
import "./App.css";
import "./components/solution";
import Solution from "./components/solution";
import Score from "./components/score";
import Letters from "./components/Letters";
import AvaliableLetters from "./components/availableLetters";
import Test from "./components/functionCom";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.AllTheLetters = this.allLetters();
    this.state = {
      test: "sonething",
      solution: "HELLOW",
      hint: "Just write (HELLOW)",
      LettersStatus: this.AllTheLetters,
      score: 100,
      lettersSolved: {},
    };
  }
  allLetters() {
    let arrayOfAllLetters = {};
    let char = "A";
    while (char != "Z") {
      arrayOfAllLetters[char] = false;
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return arrayOfAllLetters;
  }
  changeLetterState = (letter) => {
    let tempLetters = {};
    for (let key in this.state.LettersStatus) {
      tempLetters[key] = this.state.LettersStatus[key];
    }
    tempLetters[letter] = true;
    if (!this.state.solution.includes(letter)) {
      this.reduceScore();
    }
    this.setState({ LettersStatus: tempLetters });
  };
  returnLetterState = (letter) => {
    return this.state.LettersStatus[letter];
  };
  increaseScore = (letter) => {
    if (!this.state.lettersSolved[letter]) {
      let temp = {};
      for (let key in this.state.lettersSolved) {
        temp[key] = this.state.lettersSolved[key];
      }
      temp[letter] = "OK";
      this.setState({ lettersSolved: temp, score: this.state.score + 5 });
    }
  };
  reduceScore = () => {
    this.setState({ score: this.state.score - 20 });
  };
  render() {
    return (
      <div>
        <h5>Avaliable letters </h5>
        <Letters
          letterStatus={this.state.LettersStatus}
          changeLetterState={this.changeLetterState}
          returnLetterState={this.returnLetterState}
        />
        <Solution
          solution={this.state.solution}
          hint={this.state.hint}
          returnLetterState={this.returnLetterState}
          score={this.state.score}
          increaseScore={this.increaseScore}
        />
        <Score score={this.state.score} />
      </div>
    );
  }
}

export default App;
