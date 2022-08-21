import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome Mr {this.props.user} we give you hottest{" "}
          {this.props.hot.map((hot) => {
            if (hot.hottest == true) {
              return hot.item + " for $" + hot.price;
            }
          })}
        </h1>
      </div>
    );
  }
}

export default Landing;
