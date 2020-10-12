'use strict';

const Hashtable = require('../../data-structures/hashtable/hashtable');
const leftJoin = require('./left-join');

const testSynonymHash1 = () => {
  const table = new Hashtable();
  table.add('fond', 'enamored');
  table.add('wrath', 'anger');
  table.add('diligent', 'employed');
  table.add('outfit', 'garb');
  table.add('guide', 'usher');
  return table;
};

const testAntonymHash2 = () => {
  const table = new Hashtable();
  table.add('fond', 'averse');
  table.add('wrath', 'delight');
  table.add('diligent', 'idle');
  table.add('guide', 'follow');
  table.add('flow', 'jam');
  return table;
};

const testOutput = [
  ['fond', 'enamored', 'averse'],
  ['wrath', 'anger', 'delight'],
  ['diligent', 'employed', 'idle'],
  ['outfit', 'garb', null],
  ['guide', 'usher', 'follow'],
];

describe('leftJoin tests', () => {
  it('should do its thang properly', () => {
    const testHash1 = testSynonymHash1();
    const testHash2 = testAntonymHash2();

    // console.log('TEST HASH 1:', testHash1.buckets[48]);
    // console.log('TEST HASH 1:', testHash1.buckets[48][0]);
    // console.log('TEST HASH 1:', testHash1.buckets[48][0][0]);
    // console.log('TEST HASH 2:', testHash2.buckets);

    expect(leftJoin(testHash1, testHash2)).toEqual(testOutput);
  });
});
