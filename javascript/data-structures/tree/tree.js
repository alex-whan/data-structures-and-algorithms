'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Create a BinaryTree class
// Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const output = [];

    function _preOrder(root) {
      if (!root) {
        return;
      }
      output.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    }

    _preOrder(this.root);

    return output;
  }

  inOrder() {
    const output = [];

    function _inOrder(root) {
      if (!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);
      _inOrder(root.right);
    }

    _inOrder(this.root);

    return output;
  }

  postOrder() {
    const output = [];

    function _postOrder(root) {
      if (!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);
    }

    _postOrder(this.root);

    return output;
  }
}

const Marle = new Node('Marle');
const Lucca = new Node('Lucca');
const Crono = new Node('Crono', Lucca, Marle);
const tree = new BinaryTree(Crono);
const preOrderResults = tree.preOrder();
const inOrderResults = tree.inOrder();
const postOrderResults = tree.postOrder();
console.log(preOrderResults);
console.log(inOrderResults);
console.log(postOrderResults);

// Create a BinarySearchTree class
// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.

// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.
