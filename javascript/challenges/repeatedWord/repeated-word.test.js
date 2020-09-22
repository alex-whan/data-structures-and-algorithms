'use strict';

const repeatedWord = require('./repeated-word');

describe('repeatedWord function tests', () => {
  it('should return the first repeated word in a string', () => {
    let str = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(str)).toBe('a');
  });

  it('should return the first repeated word in a very long string', () => {
    let str =
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(str)).toBe('it');
  });

  it('should ignore any trailing punctuation on the first repeated word in a string', () => {
    let str =
      'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(str)).toBe('summer');
  });

  it('should ignore all types of punctuation', () => {
    let str = 'Once upon _a- time, there was /a/ brave princess who...';
    expect(repeatedWord(str)).toBe('a');
  });

  it('should ignore all types of non-letter characters', () => {
    let str = 'Once upon ++a++ time, there was .a. brave princess who...';
    expect(repeatedWord(str)).toBe('a');
  });

  it('should not differentiate between lowercase and uppercase letters when identifying a repeated word', () => {
    let str = 'There is not a chance in the world this fails. NOT a chance.';
    expect(repeatedWord(str)).toBe('not');
  });

  it('should throw an error when there are no repeated words in a string', () => {
    let str = 'This is my string with no repeated words.';
    expect(() => repeatedWord(str)).toThrow(RangeError);
  });
});
