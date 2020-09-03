'use strict';

const { Node } = require('../../data-structures/tree/tree');
const { BinaryTree } = require('../../data-structures/tree/tree');

function fizzBuzzTree(tree) {
  if (!tree.root) {
    throw new RangeError('Cannot operate on an empty tree!');
  }

  function _fizzBuzzCheck(root) {
    if (!root) {
      return;
    }

    if (root.value % 3 === 0 && root.value % 5 === 0) {
      root.value = 'FizzBuzz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    } else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    } else {
      root.value = root.value.toString();
    }

    _fizzBuzzCheck(root.left);
    _fizzBuzzCheck(root.right);
  }

  _fizzBuzzCheck(tree.root);
  // tree.inOrder();
}

module.exports = fizzBuzzTree;
