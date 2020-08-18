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
  expect(ll.head.value).toBe('cream');
});

// Can properly insert multiple nodes into the linked list
it('insert() properly adds multiple nodes to a list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.head.next.value).toBe('cream');
});

// Will return true when finding a value within the linked list that exists
it('includes() returns true when finding a value within the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insert('pie');
  expect(ll.includes('brownies')).toBe(true);
});

// Will return false when searching for a value in the linked list that does not exist
it('includes() returns false when value is not found within the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insert('pie');
  expect(ll.includes('peaches')).toBe(false);
});

// Can properly return a collection of all the values that exist in the linked list
it('toString() properly returns a collection of all values in the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.toString()).toBe(
    '{ brownies } -> { cream } -> { cookies } -> NULL'
  );
});

// APPEND
// Can successfully add a node to the end of the linked list

// Can successfully add multiple nodes to the end of a linked list

// INSERT BEFORE
// Can successfully insert a node before a node located in the middle of a linked list
it('can successfully insert a node before a node localted in the middle of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insertBefore('cookies', 'peaches');
  expect(ll.toString()).toBe(
    '{ brownies } -> { cream } -> { peaches } ->  cookies } -> NULL'
  );
});

// Can successfully insert a node before the first node of a linked list

// INSERT AFTER
// Can successfully insert after a node in the middle of the linked list

// Can successfully insert a node after the last node of the linked list
