# Stacks and Queues

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/data-structures/stacksAndQueues/stacks-and-queues.js)**

## Challenge

Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.

Create a `Stack` class that has a top property. It creates an empty Stack when instantiated. Write the following methods for the Stack class: `push()`, `pop()`, `peek()`, `isEmpty()`. See below for further information on method functionality.

Create a `Queue` class that has a front property. It creates an empty Queue when instantiated. Write the following methods for the Queue class: `enqueue()`, `dequeue()`, `peek()`, `isEmpty()`. See below for further information on method functionality.

## Approach & Efficiency

### Big O Time:

#### Stack

- `push()`: O(1)
- `pop()`: O(1)
- `peek()`: O(1)
- `isEmpty()`: O(1)

#### Queue

- `enqueue()`: O(1)
- `dequeue()`: O(1)
- `peek()`: O(1)
- `isEmpty()`: O(1)

### Big O Space:

#### Stack

- `push()`: O(1)
- `pop()`: O(1)
- `peek()`: O(1)
- `isEmpty()`: O(1)

#### Queue

- `enqueue()`: O(1)
- `dequeue()`: O(1)
- `peek()`: O(1)
- `isEmpty()`: O(1)

## API

### Available Methods

#### Stack

- `push(value)`: Takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

- `pop()`: Does not take any argument, removes the node from the top of the stack, and returns the node’s value. Raises an exception when called on an empty stack.

* `peek()`: Does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Should raise exception when called on an empty stack

* `isEmpty()`: Takes no argument, and returns a boolean indicating whether or not the stack is empty.

#### Queue

- `enqueue(value)`: Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

- `dequeue()`: Does not take any argument, removes the node from the front of the queue, and returns the node’s value. Raises an exception when called on an empty queue.

- `peek()`: Does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Raises an exception when called on an empty queue.

- `isEmpty()`: Takes no argument, and returns a boolean indicating whether or not the queue is empty.
