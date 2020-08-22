'use strict';

const { Stack } = require('./stacks-and-queues.js');
const { Queue } = require('./stacks-and-queues.js');

describe('Stack tests', () => {
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    expect(stack.peek()).toBe('Crono');
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Marle');
    expect(stack.peek()).toBe('Marle');
  });

  it('can successfully pop off of a stack', () => {
    const stack = new Stack();
    stack.push('Robo');
    stack.push('Lucca');
    const popped = stack.pop();
    expect(popped).toBe('Lucca');
  });

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

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('Crono');
    stack.push('Lucca');
    stack.push('Marle');
    expect(stack.peek()).toBe('Marle');
  });

  it('should instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('can successfully check and return true if a stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can successfully check and return false if a stack is not empty', () => {
    const stack = new Stack();
    stack.push('Frog');
    expect(stack.isEmpty()).toBe(false);
  });

  it('should not allow peek() on an empty list', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow(RangeError);
  });

  it('should not allow pop() on an empty list', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(RangeError);
  });
});

describe('Queue tests', () => {
  it('can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('Crono');
    expect(queue.peek()).toBe('Crono');
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('Crono');
    queue.enqueue('Lucca');
    queue.enqueue('Marle');
    queue.enqueue('Frog');
    queue.enqueue('Robo');
    queue.enqueue('Ayla');
    queue.enqueue('Magus');
    expect(queue.peek()).toBe('Crono');
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('Marle');
    queue.enqueue('Lucca');
    queue.enqueue('Crono');
    expect(queue.dequeue()).toBe('Marle');
    expect(queue.peek()).toBe('Lucca');
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('Robo');
    expect(queue.peek()).toBe('Robo');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('Magus');
    queue.enqueue('Ozzie');
    queue.enqueue('Lavos');
    expect(queue.dequeue()).toBe('Magus');
    expect(queue.dequeue()).toBe('Ozzie');
    expect(queue.dequeue()).toBe('Lavos');
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('should instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  it('should not allow peek() on an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow(RangeError);
  });
});
