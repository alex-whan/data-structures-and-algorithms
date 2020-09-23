'use strict';

const treeIntersection = require('./tree-intersection');
const { Node } = require('../../data-structures/tree/');
const { BinaryTree } = require('../../data-structures/tree/tree');

describe('treeIntersection tests', () => {
  it('should output an array of all shared values between two trees', () => {
    const tree1 = testTree1();
    const tree2 = testTree2();
    expect(tree1.postOrder()).toEqual([1, 2, 3, 4, 5]);
    expect(tree2.postOrder()).toEqual([1, 2, 5, 6]);
    expect(treeIntersection(tree1, tree2)).toEqual([1, 2, 5]);
  });

  it('should output an array of all shared values between two single-Node trees', () => {
    const one = new Node(1);
    const tree1 = new BinaryTree(one);
    const otherOne = new Node(1);
    const tree2 = new BinaryTree(otherOne);
    expect(tree1.postOrder()).toEqual([1]);
    expect(tree2.postOrder()).toEqual([1]);
    expect(treeIntersection(tree1, tree2)).toEqual([1]);
  });

  it('should successfully return a shared number only once per array, even if the number appears more than once per tree', () => {
    const one = new Node(1);
    const otherOne = new Node(1, one);
    const tree1 = new BinaryTree(otherOne);
    const tree2 = testTree2();
    expect(tree1.postOrder()).toEqual([1, 1]);
    expect(tree2.postOrder()).toEqual([1, 2, 5, 6]);
    expect(treeIntersection(tree1, tree2)).toEqual([1]);
  });

  it('should indicate to the user if there are no shared values between two trees', () => {
    const one = new Node(1);
    const tree1 = new BinaryTree(one);
    const two = new Node(2);
    const tree2 = new BinaryTree(two);
    expect(tree1.postOrder()).toEqual([1]);
    expect(tree2.postOrder()).toEqual([2]);
    expect(treeIntersection(tree1, tree2)).toEqual('No shared values found!');
  });
});

const testTree1 = () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3, one, two);
  const four = new Node(4, three);
  const five = new Node(5, four);
  let tree1 = new BinaryTree(five);
  return tree1;
};

const testTree2 = () => {
  const one = new Node(1);
  const two = new Node(2, one);
  const five = new Node(5, two);
  const six = new Node(6, five);
  let tree2 = new BinaryTree(six);
  return tree2;
};
