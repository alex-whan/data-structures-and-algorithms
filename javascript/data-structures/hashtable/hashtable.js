'use strict';

class Hashtable {
  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  // add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  add(key, value) {}

  // get: takes in the key and returns the value from the table.
  get(key) {}

  // contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  contains(key) {}

  // hash: takes in an arbitrary key and returns an index in the collection.
  hash(key) {}
}

module.exports = Hashtable;
