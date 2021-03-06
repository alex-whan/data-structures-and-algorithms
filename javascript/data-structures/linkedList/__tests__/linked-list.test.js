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
it('can successfully add a node to the end of the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.append('brownies');
  expect(ll.toString()).toBe(
    '{ cream } -> { cookies } -> { brownies } -> NULL'
  );
});

// Can successfully add multiple nodes to the end of a linked list
it('can successfully add a node to the end of the list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.append('brownies');
  ll.append('peaches');
  expect(ll.toString()).toBe(
    '{ cream } -> { cookies } -> { brownies } -> { peaches } -> NULL'
  );
});

// Bonus test from previously: append to an empty list
it('can append to an empty list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  expect(ll.head.value).toBe('cookies');
});

// INSERT BEFORE
// Can successfully insert a node before a node located in the middle of a linked list
it('can successfully insert a node before a node located in the middle of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insertBefore('cookies', 'peaches');
  expect(ll.toString()).toBe(
    '{ brownies } -> { cream } -> { peaches } -> { cookies } -> NULL'
  );
});

// Can successfully insert a node before the first node of a linked list
it('can successfully insert a node before the first node of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insertBefore('brownies', 'peaches');
  expect(ll.toString()).toBe(
    '{ peaches } -> { brownies } -> { cream } -> { cookies } -> NULL'
  );
});

// INSERT AFTER
// Can successfully insert after a node in the middle of the linked list
it('can successfully insert a node after a node located in the middle of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insertAfter('cream', 'peaches');
  expect(ll.toString()).toBe(
    '{ brownies } -> { cream } -> { peaches } -> { cookies } -> NULL'
  );
});

// Can successfully insert a node after the last node of the linked list
it('can successfully insert a node after the last node of a linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  ll.insertAfter('cookies', 'peaches');
  expect(ll.toString()).toBe(
    '{ brownies } -> { cream } -> { cookies } -> { peaches } -> NULL'
  );
});

// KTH FROM END - Unit Tests
// Where k is greater than the length of the linked list
it('should throw an exception when k is greater than the length of the linked list', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.kthFromEnd(6)).toBe('EXCEPTION');
});

// Where k and the length of the list are the same
it('should return a value when k and the length of the list are the same', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.kthFromEnd(3)).toBe('brownies');
});

// Where k is not a positive integer
it('should throw an exception when k is not a positive integer', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.kthFromEnd(-2)).toBe('EXCEPTION');
});

// Where the linked list is of a size 1
it('should return a value when the linked list is of a size of 1', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  expect(ll.kthFromEnd(1)).toBe('cookies');
});

// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
it('should return a value when k is somewhere in the middle of the linked list (Happy Path)', () => {
  const ll = new LinkedList();
  ll.insert('cookies');
  ll.insert('cream');
  ll.insert('brownies');
  expect(ll.kthFromEnd(2)).toBe('cream');
});
