import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Fentities from "./components/Fentities";
import Fentity from "./components/Fentity";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      wizards: [
        {
          name: "Merlin",
          power: "Wisdom",
          other: "Helped King Arthur",
          imgUrl: "https://tinyurl.com/merlin-image",
        },
        {
          name: "Morgana Le Fay",
          power: "Forces of Nature",
          other: "Trapped Merlin in a cave for eternity",
          imgUrl: "https://tinyurl.com/morgana-image",
        },
        {
          name: "Gandalf",
          power: "Plot Convenience",
          other: "Once broke a bridge",
          imgUrl: "https://tinyurl.com/gandalf-img",
        },
      ],
      bestiary: [
        {
          name: "Smaug",
          power: "Fire and Flying",
          other: "Burned a city to with his mouth",
          imgUrl: "https://tinyurl.com/smaug-image",
        },
        {
          name: "Buckbeak",
          power: "Flying",
          other: "Knocked over Malfoy like a boss",
          imgUrl: "https://tinyurl.com/buckbeak-image",
        },
        {
          name: "Cerebrus",
          power: "Having three heads",
          other: "Holding back the dead since 100 BCE",
          imgUrl: "https://tinyurl.com/cerebrus-image",
        },
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">{/* Main Links */}</div>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Route path="/" exact component={Home} />
          <Route
            path="/about"
            exact
            render={() => {
              return <About items={Object.keys(state)} />;
            }}
          />
          <Route
            path={"/directory/:fentities"}
            render={(match) => {
              return <Fentities state={this.state} match={match} />;
            }}
          />
          <Route
            path={"/directory/:fentities/:fentity"}
            exact
            render={(match) => {
              return <Fentity state={this.state} match={match} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
