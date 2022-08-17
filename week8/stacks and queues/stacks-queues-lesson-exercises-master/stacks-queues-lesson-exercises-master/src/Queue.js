/* Write your class below */

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    if (this.queue.length == 0) {
      this.queue[0] = item;
    } else {
      for (let i = this.queue.length; i >= 1; i--) {
        this.queue[i] = this.queue[i - 1];
      }
      this.queue[0] = item;
    }
  }
  isEmpty() {
    if (this.queue.length == 0) return true;
    return false;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.queue[this.queue.length - 1];
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const dequeued = this.queue[0];
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length -= 1;
    return dequeued;
  }
  print() {
    console.log(this.queue);
  }
}

//You can paste the test code from the lesson below to test your solution
let q = new Queue();
console.log(q.isEmpty()); //true
q.print(); //[]
q.enqueue(2);
console.log(q.isEmpty()); //false
q.enqueue(4);
q.print(); //[4,2]
console.log(q.peek()); //2
q.dequeue();
q.dequeue();
console.log(q.peek()); //null
console.log(q.isEmpty()); //true
/* Do not remove the exports below */
module.exports = Queue;
