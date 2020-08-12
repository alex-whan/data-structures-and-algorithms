const insertShiftArray = require('../arrayShift/array-shift.js');

test('insertShiftArray exists', () => {
  expect(insertShiftArray).toBeDefined();
});

test('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
});

// another style here using "it"

it('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  insertShiftArray(startArray, 'y');
  expect(startArray.length).toBe(6); // need to be explicit here and hard-code this
});

it.skip('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
});
