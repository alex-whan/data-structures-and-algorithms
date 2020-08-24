# Zip Two Linked Lists

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/challenges/llZip/ll-zip.js)**

## Challenge

Write a function called `zipLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Input/Output Examples

`zipLists(list1, list2)`

| Arg: list1                     | Arg: list2                     | Output                                              |
| ------------------------------ | ------------------------------ | --------------------------------------------------- |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X |
| head -> [1] -> [3] -> X        | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [4] -> X        |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> X        | head -> [1] -> [5] -> [3] -> [9] -> [2] -> X        |

## Approach & Efficiency

### Big O Time:

O(n)

### Big O Space:

O(1)

## Diagrams & Solutions

### Whiteboard

![kthFromEnd Whiteboard 1](./llZip1.png)
![kthFromEnd Whiteboard 2](./llZip1.png)
