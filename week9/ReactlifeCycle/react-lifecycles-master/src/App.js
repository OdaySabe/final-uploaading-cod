import React, { Component } from "react";
import axios from "axios";
class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component died");
  }
  async componentDidMount() {
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");
    let count = 0;
    this.timer = setInterval(() => {
      if (count == 7) {
        count = 0;
      }
      this.addUser(users.data[count].name);
      this.setState({ time: new Date() });
      count++;
    }, 1000);
  }
  addUser = (string) => {
    this.props.addUser(string);
  };

  render() {
    return (
      <div>
        <div> {this.state.time.toLocaleTimeString()}</div>
        <h1>{this.props.user}</h1>
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      showTime: true,
      user: "",
    };
  }

  hideTime = () => {
    this.setState({ showTime: !this.state.showTime });
  };
  addUser = (string) => {
    this.setState({ user: string });
    console.log(this.state);
  };

  render() {
    let timer = this.state.showTime ? (
      <Timer addUser={this.addUser} user={this.state.user} />
    ) : null;
    return (
      <div className="App">
        {timer}
        <button onClick={this.hideTime}>Hide Time</button>
      </div>
    );
  }
}

export default App;
