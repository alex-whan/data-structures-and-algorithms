# Singly Linked List

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/data-structures/linkedList/linked-list.js)**

## Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- Big O Time:

  - `insert()`: O(1)
  - `includes()`: O(n)
  - `toString()`: O(n)

## API

### Available Methods

- `insert()`: Takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

- `includes()`: Takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

- `toString()`: Takes in no arguments and returns a string representing all the values in the Linked List, formatted as follows:

      "{ a } -> { b } -> { c } -> NULL"
