'use strict';

const AnimalShelter = require('../fifoAnimalShelter');

describe('AnimalShelter tests', () => {
  it('can successfully enqueue into empty dog queue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.dogsQueue.peek().animalType).toBe('dog');
  });

  it('can successfully enqueue into empty cat queue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    expect(shelter.catsQueue.peek().animalType).toBe('cat');
  });

  it('can successfully enqueue into empty dog and cat queues', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.dogsQueue.peek().animalType).toBe('dog');
    expect(shelter.catsQueue.peek().animalType).toBe('cat');
  });

  it('can successfully enqueue multiple objects into a queue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    expect(shelter.catsQueue.peek().animalType).toBe('cat');
    expect(shelter.dogsQueue.peek().animalType).toBe('dog');
  });

  it('should return an exception if "animal" input is neither "cat" nor "dog"', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.enqueue('parrot')).toThrow(RangeError);
  });

  it('can successfully dequeue from a dog queue if "pref" is "dog"', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.dequeue('dog');
    expect(shelter.dogsQueue.isEmpty()).toBe(true);
  });

  it('can successfully dequeue from a cat queue if "pref" is "cat"', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.dequeue('cat');
    expect(shelter.catsQueue.isEmpty()).toBe(true);
  });

  it('should return "null" if "pref" is neither "cat" nor "dog"', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.dequeue('parrot');
    expect(shelter.dequeue('parrot')).toBe(null);
  });

  it('should not allow peek() on an empty queue', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.catsQueue.peek()).toThrow(RangeError);
  });
});
