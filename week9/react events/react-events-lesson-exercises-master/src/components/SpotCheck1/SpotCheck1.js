import React, { Component } from "react";

class SpotCheck1 extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "",
    };
  }
  logHover = () => {
    this.setState({ buttonText: "mouse Entered" });
  };
  logOut = () => {
    this.setState({ buttonText: "mouse Left" });
  };
  logClick() {
    console.log("I was clicked!");
  }
  render() {
    return (
      <button
        id="logger"
        onClick={this.logClick}
        onMouseEnter={this.logHover}
        onMouseLeave={this.logOut}
      >
        Click me {this.state.buttonText}
      </button>
    );
  }
}

export default SpotCheck1;
