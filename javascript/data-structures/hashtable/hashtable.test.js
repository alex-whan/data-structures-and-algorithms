'use strict';

const Hashtable = require('../hashtable/hashtable');

describe('Hashtable tests', () => {
  it('adding a key/value to the table allows value to be found', () => {
    const table = new Hashtable();
    table.add('crono', 'trigger');
    expect(table.contains('crono')).toBe(true);
  });

  it('should correctly retrieve a stored value based on a key', () => {
    const table = new Hashtable();
    table.add('crono', 'trigger');
    const value = table.get('crono');
    expect(value).toBe('trigger');
  });

  it('should return null for a key that does not exist in the hashtable', () => {
    const table = new Hashtable();
    table.add('crono', 'trigger');
    expect(table.get('mario')).toBe(null);
  });

  it('should successfully handle a collision within the hashtable', () => {
    const table = new Hashtable();
    table.add('crono', 'trigger');
    table.add('ronco', 'trigger');
    expect(table.contains('crono')).toBe(true);
    expect(table.contains('ronco')).toBe(true);
  });

  it('should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new Hashtable();
    table.add('crono', 'trigger');
    table.add('ronco', 'mario');
    expect(table.get('crono')).toBe('trigger');
    expect(table.get('ronco')).toBe('mario');
  });

  it('should successfully hash a key to an in-range value', () => {
    const table = new Hashtable();
    const indexValue = table.hash('crono');
    console.log('index VALUE???', indexValue);
    expect(indexValue).toBeLessThanOrEqual(1024);
    expect(indexValue).toBeGreaterThanOrEqual(0);
  });
});
