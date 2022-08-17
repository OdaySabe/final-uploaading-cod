import Article from "./Article";
import React, { Component } from "react";

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ];

    return (
      <div>
        (
        {wardrobe.map((item) => {
          if (item.color == "blue") {
            return (
              <p>
                {item.type} {item.color} {item.size}
              </p>
            );
          }
        })}
        )
      </div>
    );
  }
}

export default Wardrobe2;
