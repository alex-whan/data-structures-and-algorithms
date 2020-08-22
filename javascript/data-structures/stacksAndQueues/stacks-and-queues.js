'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Create a Stack class that has a top property. It creates an empty Stack when instantiated.

// This object should be aware of a default empty value assigned to top when the stack is created.

// the way insert worked on our LL is how PUSH works here
// Think of STACKS like a LINKED LIST that we're INSERTING
// Think about the bottom pancake having a NEXT of NULL, and every PANCAKE you put on is like our regular LL's insert function

class Stack {
  constructor() {
    this.top = null;
  }

  // Establish NODE and assign next
  // Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    this.top = new Node(value, this.top);
  }

  // Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  // Should raise exception when called on empty stack
  pop() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot pop off an empty stack');
    }

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  // Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  // Should raise exception when called on empty stack
  peek() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot peek at an empty stack');
    }
    return this.top.value;
  }

  // Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
  isEmpty() {
    if (!this.top) {
      return true;
    } else if (this.top.value) {
      return false;
    }
  }
}

// class Queue {}

module.exports = Stack;
// module.exports = Queue;

// Create a Queue class that has a front property. It creates an empty Queue when instantiated.
// This object should be aware of a default empty value assigned to front when the queue is created.
// Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
// Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
// Should raise exception when called on empty queue
// Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
// Should raise exception when called on empty queue
// Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
