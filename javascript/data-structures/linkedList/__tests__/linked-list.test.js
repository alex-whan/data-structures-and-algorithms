'use strict';

const LinkedList = require('../linked-list.js');

// Can successfully instantiate an empty linked list
it('instantiates an empty LinkedList', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

// Can properly insert into the linked list
it('insert() properly adds to an empty list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  expect(ll.head.value).toBe('cookies');
});

// The head property will properly point to the first node in the linked list
it('head property points to first node in the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  expect(ll.head.value).toBe('cream'); // This isn't right
});

// Can properly insert multiple nodes into the linked list
it('insert() properly adds multiple nodes to a list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.head.value).toBe('brownies');
});

// Will return true when finding a value within the linked list that exists

// Will return false when searching for a value in the linked list that does not exist

// Can properly return a collection of all the values that exist in the linked list
