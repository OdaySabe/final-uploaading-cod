import logo from "./logo.svg";
import "./App.css";
import "./components/solution";
import Solution from "./components/solution";
import Score from "./components/score";
import Letters from "./components/Letters";
import AvaliableLetters from "./components/availableLetters";
function App() {
  return (
    <div>
      <Score />
      <Solution />
      <Letters />

      <h2>Available letters are :</h2>
      <AvaliableLetters />
    </div>
  );
}

export default App;
