import React, { Component } from "react";

class Hudini extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  render() {
    return <h3>{this.state.show ? "Now you see me" : "now you dont"}</h3>;
  }
}

export default Hudini;
