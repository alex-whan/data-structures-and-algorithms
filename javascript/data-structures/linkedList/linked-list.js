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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  insertBefore(value, newVal) {
    let nodeToInsert = new Node(newVal, null);
    let currentNode = this.head;
    if (currentNode.value === value) {
      nodeToInsert.next = currentNode;
      this.head = nodeToInsert;
    }

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        nodeToInsert.next = currentNode.next;
        currentNode.next = nodeToInsert;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal) {
    let nodeToInsert = new Node(newVal, null);
    let currentNode = this.head;
    if (currentNode.value === value) {
      nodeToInsert.next = currentNode.next;
      currentNode.next = nodeToInsert;
    }

    while (currentNode) {
      if (currentNode.value === value) {
        nodeToInsert.next = currentNode.next;
        currentNode.next = nodeToInsert;
        break;
      }
      currentNode = currentNode.next;
    }
    return;
  }
}

module.exports = LinkedList;
