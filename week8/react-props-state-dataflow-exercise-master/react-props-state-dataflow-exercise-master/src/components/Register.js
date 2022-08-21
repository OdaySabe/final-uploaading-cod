import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div id="register">
        <h1>Register</h1>
        {this.props.data.map((obj) => {
          return (
            <p>
              {obj.day} {obj.time}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Register;
