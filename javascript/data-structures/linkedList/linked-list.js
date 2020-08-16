'use strict';

class Node {
  constructor(value, next = null) {
    // default value if no next
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let nodeMap = '';
    let currentNode = this.head;
    while (currentNode.next) {
      nodeMap += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    nodeMap += `{ ${currentNode.value} } -> `;
    return `${nodeMap}NULL`;
  }
}

module.exports = LinkedList;
