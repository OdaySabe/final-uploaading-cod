/* Write your class below */

class Stack {
  constructor() {
    this.stack = [];
    this.minVal = [];
  }
  push(item) {
    if (this.isEmpty()) {
      this.minVal[this.minVal.length] = item;
      this.stack[this.stack.length] = item;
    } else {
      if (this.minVal[this.minVal.length - 1] > item)
        this.minVal[this.minVal.length] = item;
      else {
        this.minVal.unshift(item);
      }
      this.stack[this.stack.length] = item;
    }
  }
  pop() {
    if (!this.isEmpty()) {
      this.minVal.splice(
        this.minVal.indexOf(this.stack[this.stack.length - 1]),
        1
      );
      this.stack.length -= 1;

      return delete this.stack[this.stack.length];
    } else {
      return null;
    }
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  print() {
    console.log(this.stack);
  }
  getMin() {
    if (this.isEmpty()) return null;
    return this.minVal[this.minVal.length - 1];
  }
}
const myStack = new Stack();

//You can paste the test code from the lesson below to test your solution
console.log(myStack.isEmpty()); //true
myStack.print(); //[]
myStack.push(2);
console.log(myStack.isEmpty()); //false
myStack.push(4);
myStack.print(); //[2,4]
console.log(myStack.peek()); //4
myStack.pop();
myStack.pop();
console.log(myStack.peek()); //null
console.log(myStack.isEmpty()); //true
console.log("===================Min Value ======================");
myStack.push(17);
myStack.push(12);
myStack.push(31);
console.log(myStack.getMin()); //12
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.getMin()); //null
myStack.push(19);
myStack.push(21);
console.log(myStack.getMin()); //19
myStack.push(3);
console.log(myStack.getMin()); //3
myStack.pop();
myStack.pop();
myStack.print();

console.log(myStack.getMin()); //19
/* Do not remove the exports below */
module.exports = Stack;
