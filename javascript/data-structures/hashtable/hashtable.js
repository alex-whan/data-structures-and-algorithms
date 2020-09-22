'use strict';

// https://repl.it/@alexwhan/HashTableBusiness#index.js

class Hashtable {
  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  // add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

  //   Add()
  // When adding a new key/value pair to a hashtable:
  // send the key to the GetHash method.
  // Once you determine the index of where it should be placed, go to that index
  // Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
  // If something does exist, add the new key/value pair to the data structure within that bucket.

  add(key, value) {
    const index = this.hash(key);
    const contentsOfBucket = this.buckets[index];

    if (contentsOfBucket === undefined) {
      this.buckets[index] = [[key, value]];
    } else {
      // What do we do now when there's already someone in the bucket spot?? Variations on the theme of GET and what we did with the keys there
      // Remember: buckets is an ARRAY!
      this.buckets[index].push([key, value]);
    }
  }

  // get: takes in the key and returns the value from the table.
  // Find()/get()
  // The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

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
  }

  // contains: takes in the key and returns a boolean, indicating if the key exists in the table already.

  // Contains()
  // The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.

  contains(key) {
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
      return false; // does NOT contain key
    } else {
      return true;
    }
  }

  // hash: takes in an arbitrary key and returns an index in the collection.

  // GetHash()
  // The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

  hash(key) {
    let sum = 0;

    for (let char of key) {
      sum += char.charCodeAt(0);
    }

    const primed = sum * 599;
    const index = primed % this.buckets.length;
    return index;
  }
}

module.exports = Hashtable;
