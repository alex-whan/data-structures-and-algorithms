const binarySearch = require('./array-binary-search.js');

test('insertShiftArray exists', () => {
  expect(binarySearch).toBeDefined();
});

it('should not modify the original', () => {
  const startArray = ['x', 'y', 'x', 'x', 'x', 'x'];
  binarySearch(startArray, 'y');
  expect(startArray.length).toBe(6); // need to be explicit here and hard-code this
});
