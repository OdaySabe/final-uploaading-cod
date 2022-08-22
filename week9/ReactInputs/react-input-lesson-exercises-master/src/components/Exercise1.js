import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }
  changeInput = (element) => {
    this.props.changeInput(element);
  };
  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.props.state["name-input"]}
          onChange={this.changeInput}
        />
        <input
          id="age-input"
          value={this.props.state["age-input"]}
          onChange={this.changeInput}
        />
        <button onClick={this.props.alertState}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
