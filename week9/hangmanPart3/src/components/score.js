import React, { Component } from "react";
class Score extends Component {
  checkGotSolution() {
    if (this.props.score < 0) {
      return <h1>YOU LOST</h1>;
    } else {
      return <h1>{this.props.score}</h1>;
    }
  }

  render() {
    return <div>{this.checkGotSolution()}</div>;
  }
}
export default Score;
