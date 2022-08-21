import React, { Component } from "react";

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text);
  };

  render() {
    return (
      <div key={Math.floor(Math.random() * 1000)}>
        <h3>{this.props.task.text}</h3>:-
        <button onClick={this.complete}>Complete</button>
      </div>
    );
  }
}

export default Task;
