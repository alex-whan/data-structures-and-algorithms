'use strict';

const hasDirectFlights = require('./get-edge');
// const { Graph } = require('../../data-structures/graph/graph');
const Graph = require('../../data-structures/graph/graph2');

const graph = new Graph();
const tatooine = graph.addVertex('Tatooine');
const naboo = graph.addVertex('Naboo');
const dathomir = graph.addVertex('Dathomir');
const coruscant = graph.addVertex('Coruscant');
const geonosis = graph.addVertex('Geonosis');

graph.addEdges(tatooine, naboo, 150);
graph.addEdges(naboo, dathomir, 100);
graph.addEdges(dathomir, coruscant, 200);
graph.addEdges(coruscant, geonosis, 300);
graph.addEdges(geonosis, tatooine, 50);

describe('hasDirectFlights tests', () => {
  it('should be able to correctly return a possible route between two points and its cost', () => {
    const spaceports = [tatooine, naboo];
    const value = hasDirectFlights(graph, spaceports);
    expect(value).toEqual('true, $150');
  });

  it('should be able to correctly return a possible route between more than two points and its cost', () => {
    const spaceports = [tatooine, naboo, dathomir];
    const answer = hasDirectFlights(graph, spaceports);
    expect(answer).toEqual('true, $250');
  });

  it('should return a possible route that traverses all points in the graph', () => {
    const spaceports = [
      tatooine,
      naboo,
      dathomir,
      coruscant,
      geonosis,
      tatooine,
    ];
    const value = hasDirectFlights(graph, spaceports);
    expect(value).toEqual('true, $800');
  });

  it('should return false with no cost if a direct route is not possible', () => {
    const spaceports = [tatooine, coruscant];
    const value = hasDirectFlights(graph, spaceports);
    expect(value).toEqual('false, $0');
  });
});
