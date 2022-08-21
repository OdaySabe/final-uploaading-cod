import React, { Component } from "react";
import Conversation from "./Conversation";
import List from "./List";

class Contact extends Component {
  render() {
    return (
      <div>
        {this.props.conversations.map((element) => {
          return (
            <div>
              <List
                changedisplayConversation={this.props.changedisplayConversation}
                with={element.with}
              ></List>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contact;
