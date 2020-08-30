'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (!this.stack1.top) {
      throw new RangeError('Cannot dequeue from an empty queue!');
    }

    let currentNode = this.stack1.top;
    while (currentNode) {
      currentNode = currentNode.next;
      this.stack2.push(this.stack1.pop());
    }

    let result = this.stack2.pop();

    currentNode = this.stack2.top;
    while (currentNode) {
      currentNode = currentNode.next;
      this.stack1.push(this.stack2.pop());
    }

    return result;
  }
}

module.exports = PseudoQueue;
