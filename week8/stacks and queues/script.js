class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack[this.stack.length] = item;
  }
  pop() {
    if (!this.isEmpty()) {
      this.stack.length -= 1;
      return this.stack[this.stack.length - 1];
    }
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length == 0;
  }
}
const stack = new Stack();
stack.push(1);
stack.pop();

stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
console.log(stack);
console.log(stack.peek());
