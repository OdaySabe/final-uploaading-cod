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
    this.state = {
      test: "sonething",
      solution: "ODAY",
      hint: "its my name",
      LettersStatus: function () {
        let arrayOfAllLetters = {};
        let char = "A";
        while (char != "Z") {
          arrayOfAllLetters[char] = false;
          char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        return arrayOfAllLetters;
      },
      score: 100,
    };
  }

  render() {
    return (
      <div>
        <h5>Avaliable letters </h5>
        <Letters letterStatus={this.state.LettersStatus()} />
        <Solution
          solution={this.state.solution}
          hint={this.state.hint}
          allLetters={this.state.LettersStatus()}
        />
        <Score score={this.state.score} />
        <Test test={this.state.test} />
      </div>
    );
  }
}

export default App;
