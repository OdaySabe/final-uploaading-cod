import React, { Component } from "react";
import SubCompany from "./SubCompany";

class Company extends Component {
  displayArray(props) {
    if (!props) {
      return;
    } else {
      return props.map((element) => {
        return (
          <SubCompany
            key="unique3"
            name={element.name}
            revenue={element.revenue}
          />
        );
      });
    }
  }
  render() {
    return (
      <div>
        {this.displayArray(this.props.arrayOfData)}
        <h3>
          {this.props.name} {this.props.revenue}
        </h3>
      </div>
    );
  }
}

export default Company;
