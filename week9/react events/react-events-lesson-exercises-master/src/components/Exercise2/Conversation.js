import React, { Component } from "react";

class Conversation extends Component {
  reset = () => {
    this.props.changedisplayConversation(null);
  };
  displayContent(sender, text) {
    if (sender == "self")
      return (
        <div>
          <h3>Me:</h3>
          <p>{text}</p>
        </div>
      );
    else {
      return (
        <div>
          <h3>{this.props.displayConversation}</h3>
          <p>{text}</p>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.props.conversations.map((element) => {
          if (element.with == this.props.displayConversation) {
            return (
              <div className="something">
                {element.convo.map((cv) => {
                  return this.displayContent(cv.sender, cv.text);
                })}
              </div>
            );
          }
        })}
        <button onClick={this.reset}>Go back</button>
      </div>
    );
  }
}

export default Conversation;
