import React, { Component } from "react";

class Quote extends Component {
  likeQuote = () => {
    this.props.likeQuote(this.props.id); // this invokes the parent's (SpotCheck4) likeQuote method, and passes it *this* quote's ID
  };

  render() {
    return (
      <div key={this.props.id}>
        <sup>{this.props.likes}</sup>
        <span className="add" onClick={this.likeQuote}>
          +
        </span>{" "}
        {/* this will invoke the *inner* likeQuote method */}
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Quote;
