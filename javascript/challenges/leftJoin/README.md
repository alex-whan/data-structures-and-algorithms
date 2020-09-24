# Tree Intersection

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/challenges/treeIntersection/tree-intersection.js)**

## Challenge

Find common values in 2 binary trees.

Write a function called `treeIntersection` that takes two binary tree parameters.

Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Input/Output Examples

**Input:**

               10
            /      \
          5         2
        /   \     /   \
      15     18  55     30


               10
            /      \
          5         16
        /   \      /   \
      15     33  55     20

**Output:**

`[15, 5, 10, 55]`

## Approach & Efficiency

### Big O:

- **Big O Time:** O(n)

  - Worst-case scenario is (n) number of nodes in the tree

- **Big O Space:** O(n)

  - Worst-case scenario is (n) number of nodes in the tree

## Diagrams & Solutions

### Whiteboard

![treeIntersection Whiteboard 1](./tree-intersection-whiteboard.jpg)
