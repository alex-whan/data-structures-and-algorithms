const LinkedList = require('../../data-structures/linkedList/linked-list.js');
const zipLists = require('./ll-zip.js');

it('should zip together two lists', () => {
  const ll1 = new LinkedList();
  ll1.insert('Crono');
  ll1.append('Lucca');
  ll1.append('Marle');
  const ll2 = new LinkedList();
  ll2.insert('Robo');
  ll2.append('Frog');
  ll2.append('Ayla');
  let combinedList = zipLists(ll1, ll2).toString();
  expect(combinedList).toBe(
    '{ Crono } -> { Robo } -> { Lucca } -> { Frog } -> { Marle } -> { Ayla } -> NULL'
  );
});
