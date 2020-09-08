'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('Multi-Bracket Validation tests', () => {
  it('should validate that brackets are balanced', () => {
    let testBrackets = '{{}}';
    expect(multiBracketValidation(testBrackets)).toBe(true);
  });

  it('should validate when there are multiple types of balanced brackets', () => {
    let testBrackets = '{([]){]}}';
    expect(multiBracketValidation(testBrackets)).toBe(true);
  });

  it('should validate that brackets are balanced and disregard other characters', () => {
    let testBrackets = '{{hello}}';
    expect(multiBracketValidation(testBrackets)).toBe(true);
  });

  it('should not validate when brackets are unbalanced', () => {
    let testBrackets = '[}}}}}';
    expect(multiBracketValidation(testBrackets)).toBe(false);
  });

  it('should not validate when brackets are overlapping', () => {
    let testBrackets = '[{(})]';
    expect(multiBracketValidation(testBrackets)).toBe(false);
  });

  it('should throw an error when the input is empty', () => {
    let testBrackets = '';
    expect(() => multiBracketValidation(testBrackets)).toThrow(RangeError);
  });

  it('should throw an error when the input is too short', () => {
    let testBrackets = '';
    expect(() => multiBracketValidation(testBrackets)).toThrow(RangeError);
  });
});
