'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class Vertex {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Edge {
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map();
    this.edges = [];
  }

  addVertex(value) {
    let vertexToAdd = new Vertex(value);
    this.adjacencies.set(vertexToAdd, []);
    return vertexToAdd;
  }

  addEdges(startVertex, endVertex, weight = 0) {
    this.adjacencies.get(startVertex).push(endVertex);
    this.adjacencies.get(endVertex).push(startVertex);

    startVertex.neighbors.push(endVertex.value);
    endVertex.neighbors.push(startVertex.value);
    const edge = new Edge(startVertex, endVertex, weight);
    this.edges.push(edge);
    return edge;
  }

  getVertices() {
    return this.adjacencies;
  }

  getNeighbors(vertex) {
    const neighbors = [];
    this.edges.forEach(edge => {
      if (edge.startVertex.value === vertex.value) {
        neighbors.push(edge);
      }
    });

    return neighbors;
  }

  size() {
    return this.adjacencies.size;
  }

  breadthFirstTraversal(startNode) {
    const visited = new Set();
    const queue = [startNode];
    // could also import a Queue

    while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = this.adjacencies.filter(item => {
        if (item === airport) {
          return item;
        } // check this IF statement
      }); // remove airport?

      for (const destination of destinations) {
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }

    return visited;
    // Need to check on algorithm for moving through graph
  }

  depthFirstTraversal(startNode, visited = new Set()) {
    const destinations = this.adjacencies.get(startNode);

    for (const destination of destinations) {
      if (!visited.has(destination)) {
        this.depthFirstTraversal(destination, visited);
      }
    }
  }
}

module.exports = Graph;
