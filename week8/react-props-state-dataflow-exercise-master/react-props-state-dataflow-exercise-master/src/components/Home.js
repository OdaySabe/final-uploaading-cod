import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Store</h1>
        {this.props.store.map((data) => {
          return (
            <Item data={data} shouldDiscount={this.props.shouldDiscount} />
          );
        })}
      </div>
    );
  }
}

export default Home;
