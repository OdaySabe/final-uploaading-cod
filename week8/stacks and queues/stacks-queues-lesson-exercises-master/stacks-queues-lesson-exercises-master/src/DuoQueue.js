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
class DuoQueue {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
  print(qNum) {
    if (qNum == 1) this.q1.print();
    else this.q2.print();
  }
  enqueue(person, qNum) {
    if (qNum == 1) {
      this.q1.enqueue(person);
    } else {
      this.q2.enqueue(person);
    }
  }
  dequeue(qNum) {
    if (qNum == 1) {
      this.q1.dequeue();
    } else {
      this.q2.dequeue();
    }
  }
  getLongestQueue() {
    if (this.q1.queue.length > this.q2.queue.length) return this.q1;
    return this.q2;
  }
  getShortestQueue() {
    if (this.q1.queue.length < this.q2.queue.length) return this.q1;
    return this.q2;
  }
  balanceQueues() {
    let short = this.getShortestQueue();
    let long = this.getLongestQueue();
    while (short.queue.length <= long.queue.length) {
      short.enqueue(long.dequeue());
    }
  }
}

//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue();

//first set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(2, 2);
dq.enqueue(2, 2);
dq.dequeue(1);
dq.dequeue(1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues();
console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue;
