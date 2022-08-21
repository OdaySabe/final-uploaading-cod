import React, { Component } from "react";
class Letter extends Component {
  render() {
    return this.props.clicked ? (
      <del>{this.props.letter}</del>
    ) : (
      <span>{this.props.letter}</span>
    );
  }
}
export default Letter;
