import React, { Component } from "react";
import Quote from "./Quote";

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

  likeQuote = (quoteId) => {
    let temState = [...this.state.quotes];
    temState.map((q) => {
      if (q.id === quoteId) {
        q.likes++;
      }
    });
    this.setState({ quotes: temState });
  };

  //Load instances of `Quote` instead of rendering a `div`, and make sure to pass the correct props:
  //a quote object and the `likeQuote` method

  render() {
    return (
      <div>
        {this.state.quotes.map((q) => {
          return (
            <div key={q.id} className="quotes">
              <Quote
                id={q.id}
                likes={q.likes}
                likeQuote={this.likeQuote}
                text={q.text}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SpotCheck3;
