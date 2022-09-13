import { observable, makeObservable } from "mobx";
import { Component } from "react";

export class Item extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.completed = false;
    this.location = "Super Sell";

    makeObservable(this, {
      name: observable,
      completed: observable,
    });
  }
  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} />
        {item.name}
      </div>
    );
  }
}
