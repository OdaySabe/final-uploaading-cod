import React, { Component } from "react";
class test extends Component {
  constructor(props) {
    super(props);
    this.test = props.test;
  }
  funOb(obj) {
    let arrayK = [];
    let arrayV = [];
    for (let key in obj) {
      arrayK.push(key);
      arrayV.push(obj[key]);
    }
    return arrayV;
  }

  // this.state = {
  //   //testPorps: JSON.stringify(self),

  // };

  render() {
    //console.log(this);
    return (
      <div>
        {this.test} {this.funOb({ a: 1, b: 2 })}
      </div>
    );
  }
}
export default test;
