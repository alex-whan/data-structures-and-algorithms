'use strict';

const { Node } = require('./tree');
const { BinaryTree } = require('./tree');
const { BinarySearchTree } = require('./tree');

// Write tests to prove the following functionality:
describe('BinaryTree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  // Can successfully instantiate a tree with a single root node
  it('can successfully instantiate a tree with a single root node', () => {
    const Crono = new Node('Crono');
    const tree = new BinaryTree(Crono);
    expect(tree.root.value).toBe('Crono');
  });

  // Can successfully add a left child and right child to a single root node
  it('can successfully add a left child and right child to a single root node', () => {
    const Marle = new Node('Marle');
    const Lucca = new Node('Lucca');
    const Crono = new Node('Crono', Lucca, Marle);
    const tree = new BinaryTree(Crono);
    expect(tree.root.left.value).toBe('Lucca');
    expect(tree.root.right.value).toBe('Marle');
  });

  // Can successfully return a collection from a preorder traversal
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
});
