# Singly Linked List

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/data-structures/linkedList/linked-list.js)**

## Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created. Write the following methods for the LinkedList class: `insert()`, `includes()`, `toString()`, `append()`, `insertBefore()`, `insertAfter()`. See below for further information on method functionality.

## Approach & Efficiency

### Big O Time:

- `insert()`: O(1)
- `includes()`: O(n)
- `toString()`: O(n)
- `append()`: O(n)
- `insertBefore()`: O(n)
- `insertAfter()`: O(n)

### Big O Space:

- `insert()`: O(1)
- `includes()`: O(n)
- `toString()`: O(n)
- `append()`: O(n)
- `insertBefore()`: O(n)
- `insertAfter()`: O(n)

## API

### Available Methods

- `insert(value)`: Takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

- `includes(value)`: Takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

- `toString()`: Takes in no arguments and returns a string representing all the values in the Linked List, formatted as follows:

      "{ a } -> { b } -> { c } -> NULL"

- `append(value)`: Takes any value as an argument and adds a new node with the given value to the end of the list.

- `insertBefore(value, newVal)`: Takes in any value and newValue as arguments and adds a new node with the given newValue immediately before the first value node.

- `insertAfter(value, newVal)`: Takes in any value and newValue as arguments and adds a new node with the given newValue immediately after the first value node.
