import logo from "./logo.svg";
import "./App.css";

function App() {
  let myNAME="ODAY"
  function numbers(x){
    let result=""
    for(let i=0;i<x;i++){
      result+=" "+i
    }
    return result;
  }
  return (
    
    <div className="App">
      <h1>{myNAME} {numbers(10)} </h1>
    </div>
  );
}

export default App;
