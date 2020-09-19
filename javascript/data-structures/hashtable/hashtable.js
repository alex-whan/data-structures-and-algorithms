'use strict';

// https://repl.it/@alexwhan/HashTableBusiness#index.js

class Hashtable {
  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  // add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  add(key, value) {
    const index = this.hash(key);
    const contentsOfBucket = this.buckets[index];

    if (contentsOfBucket === undefined) {
      this.buckets[index] = [[key, value]];
    } else {
      // What do we do now when there's already someone in the bucket spot?? Variations on the theme of GET and what we did with the keys there
    }
  }

  // get: takes in the key and returns the value from the table.
  get(key) {
    const index = this.hash(key);
    const itemsInBucket = this.buckets[index];

    if (itemsInBucket === undefined) {
      return null;
    } else {
      for (let item of itemsInBucket) {
        if (item[0] === key) {
          return item[1];
          // now we should be able to handle multiple items in a buckets
        }
      }
    }

    // another return here??
    // return data;
  }

  // contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  contains(key) {
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
      return false; // does NOT contain key
    }
    return true;
  }

  // hash: takes in an arbitrary key and returns an index in the collection.
  hash(key) {
    let sum = 0;

    for (let char of key) {
      sum += char.charCodeAt(0);
    }

    const primed = sum * 599;
    const index = primed % this.buckets.length;
    return index;
  }

module.exports = Hashtable;
