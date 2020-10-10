'use strict';

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
    let edge = new Edge(startVertex, endVertex, weight);
    this.edges.push(edge);
  }

  getVertices() {
    return this.adjacencies;
  }

  getNeighbors(vertex) {
    let neighbors = [];
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
}

module.exports = Graph;
