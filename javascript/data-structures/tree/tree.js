'use strict';

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

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

// Create a BinarySearchTree class
class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super();
    this.root = root;
  }

  add(value) {
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree
    if (!this.root) {
      new Node(value);
    }
    // let valueToAdd = value;

    function _add(value) {
      if (value === this.root.value) {
        throw new RangeError('Values must be unique!');
      }

      if (value < this.root.value) {
        if (!this.root.left) {
          this.root.left = new Node(value);
          return;
        }
        _add(this.root.left.value);
      }

      if (value > this.root.value) {
        if (!this.root.right) {
          this.root.right = new Node(value);
          return;
        }
        _add(this.root.right.value);
      }
    }

    _add(value);
  }

  contains(value) {
    // accept a value, and returns a boolean indicating whether or not the value is in the tree at least once
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
