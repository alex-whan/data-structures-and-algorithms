'use strict';

const { Node } = require('../../data-structures/tree/tree');
const { BinaryTree } = require('../../data-structures/tree/tree');
const fizzBuzzTree = require('./fizz-buzz-tree');

describe('FizzBuzz Tree tests', () => {
  it('should throw an error when used with an empty tree', () => {
    let tree = new BinaryTree();
    expect(() => fizzBuzzTree(tree)).toThrow(RangeError);
  });

  it('should traverse a tree even with a single node', () => {
    let fizzyNode = new Node(3);
    let tree = new BinaryTree(fizzyNode);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['Fizz']);
  });

  it('should return "Fizz" for node values divisible by only 3', () => {
    let fizzyNode = new Node(9);
    let tree = new BinaryTree(fizzyNode);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['Fizz']);
  });

  it('should return "Buzz" for node values divisible by only 5', () => {
    let buzzyNode = new Node(5);
    let tree = new BinaryTree(buzzyNode);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['Buzz']);
  });

  it('should return "FizzBuzz" for node values divisible by both 5 and 3', () => {
    let fizzyBuzzNode = new Node(15);
    let tree = new BinaryTree(fizzyBuzzNode);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['FizzBuzz']);
  });

  it('should return a string of a number for node values divisible by neither 5 nor 3', () => {
    let fizzyBuzzNode = new Node(2);
    let tree = new BinaryTree(fizzyBuzzNode);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['2']);
  });

  it('should return a correct tree with more than one node', () => {
    let fizzyNode1 = new Node(3);
    let buzzyNode1 = new Node(5);
    let fizzyNode2 = new Node(9, fizzyNode1, buzzyNode1);
    let stringNode = new Node(2);
    let fizzyBuzzNode = new Node(15, stringNode);
    let buzzyNode2 = new Node(10, fizzyNode2, fizzyBuzzNode);
    let tree = new BinaryTree(buzzyNode2);
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual([
      'Fizz',
      'Fizz',
      'Buzz',
      'Buzz',
      '2',
      'FizzBuzz',
    ]);
  });
});
