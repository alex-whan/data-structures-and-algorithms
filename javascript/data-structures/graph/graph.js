'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    // Adds a new node to the graph
    // Takes in the value of that node
    // Returns the added node
    this.adjacencyList.set(vertex, []);
  }

  // Alternate implementation (pros and cons)
  // addVertexAlternate(value) {
  //   const vertex = new Vertex(value);
  //   this.adjacencyList.set(vertex, []);
  // }

  // under the hood, the startVertex instance should have awareness/weight of the endVertex added to its list

  // Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
  // addEdge(startVertex, endVertex, weight = 0) {
  //   if (!this.adjacencyList.has(startVertex)) {
  //     return;
  //   }

  //   if (!this.adjacencyList.has(endVertex)) {
  //     return;
  //   }

  //   const adjacencies = this.adjacencyList.get(startVertex);

  //   const edge = new Edge(endVertex, weight);

  //   adjacencies.push(edge);
  // }

  addEdge(startVertex, endVertex, weight = 0) {
    // TODO: handle interlopers, aka a vertex that isn't in the graph

    if (!this.adjacencyList.has(startVertex)) {
      throw new RangeError('Starting vertex does not exist!');
    }

    if (!this.adjacencyList.has(endVertex)) {
      throw new RangeError('Ending vertex does not exist!');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    const edge = new Edge(endVertex, weight);
    adjacencies.push(edge); // this establishes the relationship in ONE direction
  }

  getNodes() {
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
    return this.adjacencyList;
  }

  // "getNeighbors" is a very common name for this, but JB doesn't like the name - it makes it sound like you get back a list of VERTICIES, but in reality you get back a list of EDGES (aka the relationships between verticies rather than the verticies themselves)
  getNeighbors(vertex) {
    // Returns a collection of edges connected to the given node (each vertex has a list of edges in the adjacencyList) - the [] in the adjacency list for a given vertex
    // Takes in a given node/vertex
    // Include the weight of the connection in the returned collection
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirstTraversal(rootNode) {
    const queue = new Queue();
    const visited = [];

    queue.enqueue(rootNode);
    visited.push(rootNode);

    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();
      visited.push(currentNode);
    }

    // Need to check on algorithm for moving through graph
  }
}

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = {
  Graph,
  Vertex,
  Edge,
};
