'use strict';

const Graph = require('./graph2');

describe('Breadth-first traversal tests', () => {
  it.skip('should correctly add a vertex with the value passed in', () => {
    const graph = new Graph();
    graph.addVertex('Dantooine');
    graph.addVertex('Tatooine');
    graph.addVertex('Coruscant');
    expect(graph.breadthFirstTraversal()).toBe('Dantooine');
  });
});
