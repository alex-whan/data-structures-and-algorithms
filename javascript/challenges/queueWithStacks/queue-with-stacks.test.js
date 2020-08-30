'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues');
const PseudoQueue = require('./queue-with-stacks');

describe('PseudoQueue tests', () => {
  it('can successfully instantiate an empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    expect(pq).toBeUndefined;
  });
});
