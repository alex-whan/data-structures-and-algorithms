'use strict';

const PseudoQueue = require('./queue-with-stacks');

describe('PseudoQueue tests', () => {
  it('can successfully instantiate an empty PseudoQueue (with two empty stacks)', () => {
    const pq = new PseudoQueue();
    expect(pq).toBeDefined;
    expect(pq.stack1.isEmpty()).toBe(true);
    expect(pq.stack2.isEmpty()).toBe(true);
  });

  it('can successfully enqueue a value into an empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('salmon');
    expect(pq.stack1.peek()).toBe('salmon');
  });

  it('can successfully enqueue a value into a non-empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('salmon');
    pq.enqueue('mackerel');
    pq.enqueue('yellowtail');
    expect(pq.stack1.peek()).toBe('yellowtail');
  });

  it('can successfully dequeue a value from PseudoQueue in the correct order', () => {
    const pq = new PseudoQueue();
    pq.enqueue('salmon');
    pq.enqueue('mackerel');
    pq.enqueue('yellowtail');
    expect(pq.dequeue()).toBe('salmon');
    expect(pq.dequeue()).toBe('mackerel');
    expect(pq.stack1.peek()).toBe('yellowtail');
  });

  it('can successfully empty a PseudoQueue with successive calls of dequeue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('salmon');
    pq.enqueue('mackerel');
    expect(pq.dequeue()).toBe('salmon');
    expect(pq.dequeue()).toBe('mackerel');
    expect(pq.stack1.isEmpty()).toBe(true);
  });

  it('will throw an exception when using dequeue on an empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    expect(() => pq.dequeue()).toThrow(RangeError);
  });
});
