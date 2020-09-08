'use strict';

const multiBracketValidation = input => {
  const stack = [];
  const openBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];

  const match = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  if (input.length <= 1) {
    throw new RangeError('Cannot validate an input of this length.');
  }

  if (input.length > 1 && input.includes('{' || '[' || '(')) {
    for (let i = 0; i < input.length; i++) {
      let char = input[i];

      if (openBrackets.includes(char)) {
        stack.push(char);
      }

      if (closingBrackets.includes(char)) {
        let popped = stack.pop();
        if (popped !== match[char]) {
          return false;
        }
        return true;
      }
    }
  } else {
    return false;
  }
};

module.exports = multiBracketValidation;
