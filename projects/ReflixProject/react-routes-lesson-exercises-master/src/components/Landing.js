import React, { Component } from "react";
import Catalog from "./Catalog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 id="logoHead">Who is watching ?</h1>
          <div className="Users">
            {Object.keys(this.props.users).map((user) => {
              return (
                <div>
                  <Link exact className="user" to={"/catalog/" + user}>
                    {user}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
