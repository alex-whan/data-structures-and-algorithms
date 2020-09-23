'use strict';

// const BinaryTree = require('../../data-structures/tree/tree');
const Hashtable = require('../../data-structures/hashtable/hashtable');

const treeIntersection = (tree1, tree2) => {
  const table = new Hashtable();
  const outputArr = [];

  let tree1Array = tree1.inOrder();
  let tree2Array = tree2.inOrder();

  for (let i = 0; i < tree1Array.length; i++) {
    let stringifiedNumber = tree1Array[i].toString();
    table.add(stringifiedNumber, stringifiedNumber);
  }

  // could also try a for in/of?
  for (let i = 0; i < tree2Array.length; i++) {
    if (table.contains(tree2Array[i].toString())) {
      outputArr.push(tree2Array[i]);
    }
  }

  return outputArr.length ? outputArr : 'No shared values found!';
};

module.exports = treeIntersection;
