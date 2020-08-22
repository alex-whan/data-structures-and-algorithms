'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot pop off an empty stack!');
    }

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot peek at an empty stack!');
    }
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else if (this.top.value) {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
  }

  peek() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot peek at an empty queue!');
    }
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else if (this.front.value) {
      return false;
    }
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.front = new Node(value, this.front);
      this.tail = this.front;
    } else {
      this.tail.next = new Node(value, this.front);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot dequeue from an empty queue!');
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }
}

module.exports = {
  Stack,
  Queue,
};
