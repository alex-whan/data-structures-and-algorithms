'use strict';

const { Stack } = require('./stacks-and-queues.js');
// const { Queue } = require('./stacks-and-queues.js');

// Can successfully push onto a stack
describe('Stack methods', () => {
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    expect(stack.peek()).toBe('Crono');
  });

  // Can successfully push multiple values onto a stack
  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Lucca');
    expect(stack.peek()).toBe('Lucca');
  });

  // Can successfully pop off the stack
  it('can successfully pop off of a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Lucca');
    const popped = stack.pop();
    expect(popped).toBe('Lucca');
  });

  // Can successfully empty a stack after multiple pops
  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Lucca');
    const popped = stack.pop();
    const popped2 = stack.pop();
    expect(popped).toBe('Lucca');
    expect(popped2).toBe('Crono');
    expect(stack.isEmpty()).toBe(true);
  });

  // Can successfully peek the next item on the stack
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Lucca');
    stack.push('Marle');
    expect(stack.peek()).toBe('Marle');
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
    stack.push('Lucca');
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
});

describe.skip('Queue methods', () => {
  // Can successfully enqueue into a queue
  // Can successfully enqueue multiple values into a queue
  // Can successfully dequeue out of a queue the expected value
  // Can successfully peek into a queue, seeing the expected value
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue
  // Calling dequeue or peek on empty queue raises exception
});
