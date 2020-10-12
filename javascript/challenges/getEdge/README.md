# Get Edge

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/challenges/getEdge/get-edge.js)**

## Challenge

Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Input/Output Examples

| Input                                    | Output       |
| ---------------------------------------- | ------------ |
| `[ Metroville, Pandora ]`                | `True, $82`  |
| `[ Arendelle, New Monstropolis, Naboo ]` | `True, $115` |
| `[ Naboo, Pandora ]`                     | `False, $0`  |
| `[ Narnia, Arendelle, Naboo ]`           | `False, $0`  |

## Approach & Efficiency

### Big O:

- **Big O Time:** O(n)

  - Worst-case scenario is (n) number of nodes in the graph

- **Big O Space:** O(n)

  - Worst-case scenario is (n) number of nodes in the graph

## Diagrams & Solutions

### Whiteboard

![getEdge Whiteboard 1]()
