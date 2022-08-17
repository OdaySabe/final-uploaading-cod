class UniqueArray {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  addItem(item) {
    if (this.length == 0) {
      this.items[this.length] = item;
      this.length++;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] == item) return;
      }
      this.items[this.length] = item;
      this.length++;
    }
  }
  showAll() {
    console.log(this.items);
  }
  exists(item) {
    let set = new Set(this.items);
    return set.has(item);
  }
  get(index) {
    if (this.items[index]) {
      return this.items[index];
    } else {
      return -1;
    }
  }
}
const uniqueStuff = new UniqueArray();
uniqueStuff.addItem("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.addItem("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.addItem("poster");
uniqueStuff.addItem("hydrogen");
uniqueStuff.showAll();
console.log(uniqueStuff.get(2));
