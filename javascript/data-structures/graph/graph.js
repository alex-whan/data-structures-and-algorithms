'use strict';

class Graph {
  constructor() {
    this.adjacencyList = [];
    this.edges = [];
  }

  addNode(value) {
    // Adds a new node to the graph
    // Takes in the value of that node
    // Returns the added node
  }

  addEdge(firstNode, secondNode, weight = null) {
    // Adds a new edge between two nodes in the graph
    // Include the ability to have a “weight”
    // Takes in the two nodes to be connected by the edge
    // Both nodes should already be in the Graph
  }

  getNodes() {
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
  }

  getNeighbors() {
    // Returns a collection of edges connected to the given node
    // Takes in a given node
    // Include the weight of the connection in the returned collection
  }

  size() {
    return this.vertices.size;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = new Set();
  }

  addEdge(edge) {
    this.neighbors.add(edge);
  }

  getNeighbors() {}
}

class Edge {
  constructor(firstNode, secondNode, weight) {
    this.firstNode = firstNode;
    this.secondNode = secondNode;
    this.weight = weight;
  }
}
