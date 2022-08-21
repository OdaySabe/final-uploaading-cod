import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <p>Item {this.props.data.item}</p>
        <p>
          price{" "}
          {this.props.shouldDiscount
            ? this.props.data.price * (1 - this.props.data.discount)
            : this.props.data.price}
        </p>
        <p>discount {this.props.data.discount}</p>
      </div>
    );
  }
}

export default Item;
