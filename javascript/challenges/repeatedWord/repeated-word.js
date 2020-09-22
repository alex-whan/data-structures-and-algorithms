'use strict';
const Hashtable = require('../../data-structures/hashtable/hashtable');

const repeatedWord = string => {
  const hashtable = new Hashtable();
  string = string.toLowerCase();

  let wordArray = string.match(/[a-z]+\b/g);

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let hasTheWord = hashtable.contains(word);
    if (hasTheWord) {
      return word;
    } else {
      hashtable.add(word, word);
    }
  }
  return 'No repeated words!';
};

module.exports = repeatedWord;
