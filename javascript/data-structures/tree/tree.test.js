'use strict';

const { Node } = require('./tree');
const { BinaryTree } = require('./tree');
const { BinarySearchTree } = require('./tree');
const { maxDepth } = require('./tree');

describe('Binary Tree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const Crono = new Node('Crono');
    const tree = new BinaryTree(Crono);
    expect(tree.root.value).toBe('Crono');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    const Marle = new Node('Marle');
    const Lucca = new Node('Lucca');
    const Crono = new Node('Crono', Lucca, Marle);
    const tree = new BinaryTree(Crono);
    expect(tree.root.left.value).toBe('Lucca');
    expect(tree.root.right.value).toBe('Marle');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const Frog = new Node('Frog');
    const Robo = new Node('Robo');
    const Ayla = new Node('Ayla');
    const Magus = new Node('Magus');
    const Marle = new Node('Marle', Ayla, Magus);
    const Lucca = new Node('Lucca', Robo, Frog);
    const Crono = new Node('Crono', Lucca, Marle);
    const tree = new BinaryTree(Crono);
    expect(tree.preOrder()).toEqual([
      'Crono',
      'Lucca',
      'Robo',
      'Frog',
      'Marle',
      'Ayla',
      'Magus',
    ]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const Frog = new Node('Frog');
    const Robo = new Node('Robo');
    const Ayla = new Node('Ayla');
    const Magus = new Node('Magus');
    const Marle = new Node('Marle', Ayla, Magus);
    const Lucca = new Node('Lucca', Robo, Frog);
    const Crono = new Node('Crono', Lucca, Marle);
    const tree = new BinaryTree(Crono);
    expect(tree.inOrder()).toEqual([
      'Robo',
      'Lucca',
      'Frog',
      'Crono',
      'Ayla',
      'Marle',
      'Magus',
    ]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const Frog = new Node('Frog');
    const Robo = new Node('Robo');
    const Ayla = new Node('Ayla');
    const Magus = new Node('Magus');
    const Marle = new Node('Marle', Ayla, Magus);
    const Lucca = new Node('Lucca', Robo, Frog);
    const Crono = new Node('Crono', Lucca, Marle);
    const tree = new BinaryTree(Crono);
    expect(tree.postOrder()).toEqual([
      'Robo',
      'Frog',
      'Lucca',
      'Ayla',
      'Magus',
      'Marle',
      'Crono',
    ]);
  });

  it('can successfully return the maximum numeric value within a tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5, three, four);
    const six = new Node(6, two, one);
    const seven = new Node(7, six, five);
    const tree = new BinaryTree(seven);
    expect(tree.postOrder()).toEqual([2, 1, 6, 3, 4, 5, 7]);
    expect(tree.findMaximumValue()).toEqual(7);
  });

  it('can successfully return the maximum numeric value within a single-node tree', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.findMaximumValue()).toEqual(1);
  });

  it('throws an exception if findMaximumValue is called on an empty tree', () => {
    const tree = new BinaryTree();
    expect(() => tree.findMaximumValue()).toThrow(RangeError);
  });

  it('will return the correct value of maxDepth and height', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5, three, four);
    const six = new Node(6, two, one);
    const seven = new Node(7, six, five);
    const tree = new BinaryTree(seven);
    expect(maxDepth(tree.root)).toEqual(3);
    expect(tree.height()).toEqual(3);
  });
});

describe('Binary Search Tree tests', () => {
  it('can successfully instantiate an empty BinarySearchTree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });

  it('can add values to the correct location in the BinarySearchTree', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    expect(tree.inOrder()).toEqual([1, 2, 3, 4]);
  });

  it('can successfully return true if a value is in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(4)).toBe(true);
  });

  it('can successfully return false if a value is not in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(8)).toBe(false);
  });
});
