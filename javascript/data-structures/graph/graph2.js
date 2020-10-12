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
    this.adjacencies = [];
    this.edges = [];
  }

  addVertex(value) {
    let vertexToAdd = new Vertex(value);
    this.adjacencies.push(vertexToAdd);
    return vertexToAdd;
  }

  addEdges(startVertex, endVertex, weight = 0) {
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
    if (this.adjacencies.length > 0) {
      return this.adjacencies.length;
    } else {
      return null;
    }
  }

  breadthFirstTraversal(startNode) {
    const queue = new Queue();
    const visited = [];

    queue.enqueue(startNode);
    visited.push(startNode);

    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();
      visited.push(currentNode);

      const children = this.getNeighbors(currentNode);

      if (children.length > 0) {
        children.forEach(child => {
          if (
            visited.filter(vertex => vertex.value !== child.startVertex.value)
          ) {
            queue.enqueue(child.endVertex);
          }
        });
      }
    }

    return visited;
    // Need to check on algorithm for moving through graph
  }
}

module.exports = Graph;
