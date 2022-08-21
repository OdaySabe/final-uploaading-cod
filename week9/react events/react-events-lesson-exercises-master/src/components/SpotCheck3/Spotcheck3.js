import React, { Component } from "react";

class SpotCheck3 extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          id: "3bf00g",
          text: "Friends are like butter, always wrapped up in their own thing",
          likes: 24,
        },
        {
          id: "50xx11",
          text: "If you're going to walk in the rain, at least make sure it's raining",
          likes: 82,
        },
        {
          id: "50ggr2",
          text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.",
          likes: 33,
        },
      ],
    };
  }

  likeQuote = () => {
    let tempArray = [...this.state.quotes];
    tempArray.map((q) => {
      q.likes += 1;
    });
    this.setState({ quotes: tempArray });
  };

  render() {
    return (
      <div>
        {this.state.quotes.map((q) => {
          return (
            <div key={q.id} className="quotes">
              <sup>{q.likes}</sup>
              <span onClick={this.likeQuote}>+</span>
              <span>{q.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SpotCheck3;
