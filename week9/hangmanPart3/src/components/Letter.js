import React, { Component } from "react";
class Letter extends Component {
  changeState = () => {
    this.props.changeLetterState(this.props.letter);
  };
  render() {
    return (
      <span onClick={this.changeState}>
        {!this.props.state ? (
          <span>{this.props.letter}</span>
        ) : (
          <del>{this.props.letter}</del>
        )}
      </span>
    );
  }
}
export default Letter;
