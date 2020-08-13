const binarySearch = require('./array-binary-search.js');

describe('testing the binarySearch function', () => {
  test('binarySearch exists', () => {
    expect(binarySearch).toBeDefined();
  });

  it('should not modify the original array', () => {
    const startArray = [10, 12, 16, 21, 35];
    expect(startArray.length).toBe(5); // need to be explicit here and hard-code this
  });

  it('returns an index if number exists within an array with an odd number of elements', () => {
    const startArray = [10, 12, 16, 21, 35];
    expect(binarySearch(startArray, 21)).toBe(3);
  });

  it('returns an index if number exists within an array with an even number of elements', () => {
    const startArray = [10, 12, 16, 21, 35, 68];
    expect(binarySearch(startArray, 12)).toBe(1);
  });

  it('returns -1 if number does not exist within array', () => {
    const startArray = [10, 12, 16, 21, 35, 68, 89];
    expect(binarySearch(startArray, 77)).toBe(-1);
  });
});
