import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"
  render() {
    return (
      <div >
        {/* should render an array of messages, 
        with each message in a separate div */}

        {/* You should wrap the sender in span with the class "sender" */}
        {/* When the sender is other you should display 
                  the name of the sender in the span*/}
        {/* When the sender is self, you should display "Me" in the span */}

        {/* You should render a back button with the class "back" 
            When clicked it should set the state of displayConversation to null*/}
      </div>
    );
  }
}

export default Conversation;
