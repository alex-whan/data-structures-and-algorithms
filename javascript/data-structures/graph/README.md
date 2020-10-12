# Hashtables

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/tree/master/javascript/data-structures/graph)**

## Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: `addNode()`, `addEdge()`, `getNodes()`, `getNeighbors()`, `size()`.

## API

### Available Methods

- `addNode()`: Adds a new node to the graph. Takes in the value of that node. Returns the added node.

- `addEdge()`: Adds a new edge between two nodes in the graph. Includes the ability to have a “weight”. Takes in the two nodes to be connected by the edge. Both nodes should already be in the Graph.

* `getNodes()`: Returns all of the nodes in the graph as a collection (set, list, or similar).

* `getNeighbors()`: Returns a collection of edges connected to the given node. Takes in a given node. Includes the weight of the connection in the returned collection.

* `size()`: Returns the total number of nodes in the graph

## Approach & Efficiency

### Big O Time:

- `addNode()`: O(1)

- `addEdge()`: O(1)

- `getNodes()`: O(n)

- `getNeighbors()`: O(n)

- `size()`: O(n)

### Big O Space:

- `O(n)`: At worst case, this data structure will need to create and maintain an array of `n` length for adjacencies and neighbors.
