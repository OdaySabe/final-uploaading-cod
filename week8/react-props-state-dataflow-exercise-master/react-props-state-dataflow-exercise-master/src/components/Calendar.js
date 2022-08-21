import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <h1>Calendar</h1>
        {this.props.data.map((obj) => {
          return (
            <p>
              {obj.name} {obj.day} {obj.time}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Calendar;
