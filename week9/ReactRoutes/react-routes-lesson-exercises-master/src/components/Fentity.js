import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
  render() {
    const fentity = this.props.match.match.params.fentity;
    const fentities = this.props.match.match.params.fentities;
    return (
      <div id="creature-container">
        {this.props.state[fentities].map((fiy) => {
          if (fiy.name == fentity) {
            console.log(fentity, fentities);
            return (
              <div>
                <h1>{fiy.name}</h1>
                <img src={fiy.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fiy.power}</div>
                <div className="other text">{fiy.other}</div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Fentity;
