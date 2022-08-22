import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }
  printFruite = () => {
    this.setState({ name: this.state.fruit });
  };
  selectedFruite = (fruite) => {
    this.setState(
      { fruit: fruite.target.options[fruite.target.selectedIndex].value },
      function () {
        this.printFruite();
      }
    );
  };
  render() {
    return (
      <div>
        <input id="name-input" value={this.state.name} />
        <select id="select-input" onChange={this.selectedFruite}>
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
          <option value="Meloon">Meloon</option>
          <option value="Lemon">Lemon</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;
