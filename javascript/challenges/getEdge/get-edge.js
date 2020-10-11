'use strict';

// Does the airport at index 0 have a connection to the airport at index 1?
// We need to loop through the airports to see what's up
// Lots of fancy ways to do a FOR loop in JS now, and many times they're more concise/clean, but right here we just want an old-school normal one

// rename this function
const hasDirectFlights = (graph, airports) => {
  let isPossible = true;
  let cost = 0;

  for (let i = 0; i < airports.length - 1; i++) {
    const originAirport = airports[i];
    const destinationAirport = airports[i + 1];

    const directConnections = graph.getNeighbors(originAirport);

    // This way, if we DON'T find anything to switch it to true below, it comes out false
    let directFound = false;
    // let's use a more modern way here: for/of
    // what does it actually DO/MEAN?
    for (let connection of directConnections) {
      if (connection.vertex === destinationAirport.vertex) {
        // if this is true, a direct connection was found
        // or is it just 'destinationAirport'?
        directFound = true;
        cost += connection.weight;
        break; // if we found it, no point in continuing loop
      }
    }

    // if we make it out of this loop and we didn't find a connection, that means it doesn't exist:
    if (!directFound) {
      isPossible = false; // already set, but just in case
      cost = 0; // re-sets cost to 0 if no direct route is found
      break;
    }
  }

  const answer = { isPossible, cost };

  // return {
  //   isPossible,
  //   cost,
  // };

  return `${answer.isPossible}, $${answer.cost}`;
};

module.exports = hasDirectFlights;

// What does "let foo in bar" setup mean?
// "foo in bar" vs "foo for bar":
// if you're NOT doing KEY/VALUE pairs, use OF
// What about IN?
// "You want "OF" pretty much ALWAYS, unless you're going through KEY by KEY, in which case you want "IN"""
