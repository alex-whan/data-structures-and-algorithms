// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, next = null) {
    // default value if no next
    this.value = value;
    this.next = next;
  }
}

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    this.head = new Node(value, this.head);
  }

  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

// Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:

// "{ a } -> { b } -> { c } -> NULL"

// Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

module.exports = LinkedList;
