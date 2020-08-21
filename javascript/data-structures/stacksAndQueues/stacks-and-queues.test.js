'use strict';

const Stack = require('./stacks-and-queues');
const Node = require('./stacks-and-queues');

// Write tests to prove the following functionality:

// Can successfully push onto a stack

it('can successfully push onto a stack', () => {
  const stack = new Stack();
  stack.push());
  expect(stack.peek()).toBe('apples');
});

// Can successfully push multiple values onto a stack

// Can successfully pop off the stack

// Can successfully empty a stack after multiple pops

// Can successfully peek the next item on the stack

// Can successfully instantiate an empty stack

it('should instantiate an empty stack - aka not blow up', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
  // Check if it's empty? How?
});

// Calling pop or peek on empty stack raises exception

// Can successfully enqueue into a queue

// Can successfully enqueue multiple values into a queue

// Can successfully dequeue out of a queue the expected value

// Can successfully peek into a queue, seeing the expected value

// Can successfully empty a queue after multiple dequeues

// Can successfully instantiate an empty queue

// Calling dequeue or peek on empty queue raises exception

// Ensure your tests are passing before you submit your solution.
