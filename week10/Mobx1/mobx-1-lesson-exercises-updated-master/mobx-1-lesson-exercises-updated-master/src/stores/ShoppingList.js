/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;
    makeObservable(this, {
      list: observable,
      length: observable,
    });
  }

  checkItem = () => {
    // your code here
  };
  addItem = () => {};
  editItem = () => {
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
