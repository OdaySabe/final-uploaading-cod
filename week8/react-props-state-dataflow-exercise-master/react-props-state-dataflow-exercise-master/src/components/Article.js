import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <h1>
        {this.props.color} {this.props.type}
      </h1>
    );
  }
}

export default Article;
