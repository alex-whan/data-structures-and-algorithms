'use strict';

const LinkedList = require('../../data-structures/linkedList/linked-list.js');

function zipLists(list1, list2) {
  let zippedList = new LinkedList();
  zippedList.insert(list1.head.value);
  zippedList.append(list2.head.value);

  let current = list1.head.next;
  let current2 = list2.head.next;

  while (current || current2) {
    if (current) {
      zippedList.append(current.value);
      current = current.next;
    }

    if (current2) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }
  }

  return zippedList;
}

module.exports = zipLists;
