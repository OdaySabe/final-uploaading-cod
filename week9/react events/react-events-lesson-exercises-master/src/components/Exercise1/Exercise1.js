import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
      ],
      currentImg: 0,
    };
  }
  shiftImageBack = () => {
    if (this.state.currentImg <= 0) {
      this.setState({ currentImg: 3 });
    } else {
      this.setState({ currentImg: this.state.currentImg - 1 });
    }
  };
  shiftImageForward = () => {
    if (this.state.currentImg >= 3) {
      this.setState({ currentImg: 0 });
    } else {
      this.setState({ currentImg: this.state.currentImg + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.shiftImageBack}>previous image</button>
        <img src={this.state.images[this.state.currentImg]}></img>
        <button onClick={this.shiftImageForward}>next image</button>
      </div>
    );
  }
}

export default Exercise1;
