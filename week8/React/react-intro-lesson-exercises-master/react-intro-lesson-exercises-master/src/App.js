import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getStuff() {
    return "Oday";
  }

  getMorningGreeting() {
    return (
      <div>
        <h3>Good moring Mr Oday</h3>
      </div>
    );
  }

  getEveningGreeting() {
    return (
      <div>
        <h3>Good afterNoon Mr Oday</h3>
      </div>
    );
  }
  arrayofGreetings() {
    return [
      this.getMorningGreeting(),
      this.getEveningGreeting(),
      <p>Oday Mustafa Alsabe</p>,
    ];
  }

  showCompany(name, revenue) {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  }

  getClassName(temperature) {
    if (temperature < 15) {
      return <div id="weatherbox" className="freezing"></div>;
    } else if (temperature > 15 && temperature < 30) {
      return <div id="weatherbox" className="fair"></div>;
    } else {
      return <div id="weatherbox" className="hell-scape"></div>;
    }
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];
    let morning = false;
    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            <h1> {this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {morning ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3"></div>
          {this.arrayofGreetings()}
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {[
              { name: "Tesla", revenue: 140 },
              { name: "Microsoft", revenue: 300 },
              { name: "Google", revenue: 600 },
            ].map((a) => this.showCompany(a.name, a.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(45)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
