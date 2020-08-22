'use strict';

const Stack = require('./stacks-and-queues.js');

// Write tests to prove the following functionality:

// Can successfully push onto a stack
it('can successfully push onto a stack', () => {
  const stack = new Stack();
  stack.push('apples');
  expect(stack.peek()).toBe('apples');
});

// Can successfully push multiple values onto a stack
it('can successfully push multiple values onto a stack', () => {
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  expect(stack.peek()).toBe('bananas');
});

// Can successfully pop off the stack
it('can successfully pop off of a stack', () => {
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  const popped = stack.pop();
  expect(popped).toBe('bananas');
});

// Can successfully empty a stack after multiple pops
it('can successfully empty a stack after multiple pops', () => {
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  const popped = stack.pop();
  const popped2 = stack.pop();
  expect(popped).toBe('bananas');
  expect(popped2).toBe('apples');
  expect(stack.isEmpty()).toBe(true);
});

// Can successfully peek the next item on the stack
it('can successfully push onto a stack', () => {
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  stack.push('pears');
  expect(stack.peek()).toBe('pears');
});

// Can successfully instantiate an empty stack
it('should instantiate an empty stack - aka not blow up', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
});

it('can successfully check and return true if a stack is empty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
});

it('can successfully check and return false if a stack is not empty', () => {
  const stack = new Stack();
  stack.push('bananas');
  expect(stack.isEmpty()).toBe(false);
});

// Calling pop or peek on empty stack raises exception
it('should not allow peek() on an empty list', () => {
  const stack = new Stack();
  expect(() => stack.peek()).toThrow(RangeError);
});

it('should not allow pop() on an empty list', () => {
  const stack = new Stack();
  expect(() => stack.pop()).toThrow(RangeError);
});

// Can successfully enqueue into a queue

// Can successfully enqueue multiple values into a queue

// Can successfully dequeue out of a queue the expected value

// Can successfully peek into a queue, seeing the expected value

// Can successfully empty a queue after multiple dequeues

// Can successfully instantiate an empty queue

// Calling dequeue or peek on empty queue raises exception

// Ensure your tests are passing before you submit your solution.
