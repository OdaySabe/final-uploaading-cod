import React, { Component } from "react";
const hint = function () {
  return "Hint: no hint project not ready yet";
};
class Solution extends Component {
  render() {
    let spaceArray = ["_", " _", " _", " _"];
    return (
      <div>
        <h3>{hint()}</h3>
        <h4> {spaceArray}</h4>
      </div>
    );
  }
}
export default Solution;
