'use strict';

const {
  Queue,
} = require('../../data-structures/stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.dogsQueue = new Queue();
    this.catsQueue = new Queue();
  }

  enqueue(animal) {
    if (animal === 'dog') {
      this.dogsQueue.enqueue({ animalType: 'dog' });
    }

    if (animal === 'cat') {
      this.catsQueue.enqueue({ animalType: 'cat' });
    }

    if (animal !== 'dog' && animal !== 'cat') {
      throw new RangeError(
        'Invalid input. Please enter either "dog" or "cat".'
      );
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      this.dogsQueue.dequeue();
    }

    if (pref === 'cat') {
      this.catsQueue.dequeue();
    }

    return null;
  }
}

module.exports = AnimalShelter;
