import React, { Component } from "react";
import Task from "./Task";

class SpotCheck5 extends Component {
  // Each task should be desplayed with a Task component.
  // Each Task should display the task's text, and a Complete button with the class "complete"
  // However, SpotCheck5 should filter out the tasks whose complete is true
  // Clicking the Complete button should change that task's complete to true in App's state

  constructor() {
    super();
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: false },
        { text: "Carry boxes upstairs", complete: false },
      ],
    };
  }

  markComplete = (text) => {
    let tempState = [...this.state.tasks];
    tempState.forEach((task) => {
      if (task.text === text) {
        task.complete = true;
      }
    });
    this.setState({ tasks: tempState });
  };

  render() {
    return (
      <div key={Math.floor(Math.random() * 1000)}>
        {this.state.tasks.map((task) => {
          if (task.complete === false) {
            return (
              <Task
                markComplete={this.markComplete}
                task={task}
                key={Math.floor(Math.random() * 1000)}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default SpotCheck5;
