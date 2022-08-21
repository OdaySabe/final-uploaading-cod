import React, { Component } from "react";

class List extends Component {
  showConversation = () => {
    this.props.changedisplayConversation(this.props.with);
  };
  render() {
    return (
      <div>
        <span onClick={this.showConversation}>{this.props.with}</span>
      </div>
    );
  }
}

export default List;
