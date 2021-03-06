'use strict';

// const Graph = require('./graph2');
const Graph = require('./graph2');

describe('Graph tests', () => {
  it('should correctly add a vertex with the value passed in', () => {
    const graph = new Graph();
    const answer = graph.addVertex('Dantooine');
    expect(answer.value).toBe('Dantooine');
    expect(graph.getVertices()).toEqual([
      { neighbors: [], value: 'Dantooine' },
    ]);
  });

  it('should correctly add an edge to an existing vertex', () => {
    const graph = new Graph();
    const tatooine = graph.addVertex('Tatooine');
    const dantooine = graph.addVertex('Dantooine');
    graph.addEdges(tatooine, dantooine, 150);
    expect(graph.edges[0].startVertex.value).toBe('Tatooine');
    expect(graph.edges[0].endVertex.value).toBe('Dantooine');
    expect(graph.edges[0].weight).toBe(150);
  });

  it('should return an array of all vertices in a graph', () => {
    const graph = new Graph();
    graph.addVertex('Tatooine');
    graph.addVertex('Dantooine');
    graph.addVertex('Dathomir');
    const allVertices = graph.getVertices();
    expect(allVertices.length).toBe(3);
  });

  it('should correctly return the number of vertices in a graph', () => {
    const graph = new Graph();
    graph.addVertex('Tatooine');
    graph.addVertex('Dantooine');
    graph.addVertex('Dathomir');
    expect(graph.size()).toEqual(3);
  });

  it('should return null when asked for the size of an empty graph', () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(null);
  });

  it('should return all neighbors in a graph', () => {
    const graph = new Graph();
    const tatooine = graph.addVertex('Tatooine');
    const dantooine = graph.addVertex('Dantooine');
    graph.addVertex('Dathomir');
    graph.addEdges(tatooine, dantooine, 150);
    expect(graph.getNeighbors(tatooine)[0].weight).toEqual(150);
  });
});

describe('Breadth-first traversal tests', () => {
  it('should correctly traverse the graph breadth-first', () => {
    const graph = new Graph();
    graph.addVertex('Tatooine');
    graph.addVertex('Dantooine');
    graph.addVertex('Dathomir');
    expect(graph.breadthFirstTraversal()).toEqual([
      'Tatooine',
      'Dantooine',
      'Dathomir',
    ]);
  });
});

describe('Depth-first traversal tests', () => {
  it('should correctly traverse the graph breadth-first', () => {
    const graph = new Graph();
    graph.addVertex('Tatooine');
    graph.addVertex('Dantooine');
    graph.addVertex('Dathomir');
    expect(graph.depthFirstTraversal()).toEqual([
      'Tatooine',
      'Dantooine',
      'Dathomir',
    ]);
  });
});
