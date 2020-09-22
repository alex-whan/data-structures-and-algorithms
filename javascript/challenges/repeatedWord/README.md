# Repeated Word

<!-- NEED TO CHANGE THIS LINK!! -->

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/challenges/repeatedWord/repeated-word.js)**

## Challenge

Find the first repeated word in a book.

Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

If there are no repeated words in a string, return this to the user.

## Input/Output Examples

| Input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `"Once upon a time, there was a brave princess who..."`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `"a"`      |
| `"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."` | `"it"`     |
| `"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `"summer"` |

## Approach & Efficiency

### Big O:

- Time: O(n)

  - Worst case scenario: Function must loop through an array of words of `n` length.

- Space: O(n)

  - Worst case scenario: Function must store an extra array of words of `n` length.

## Diagrams & Solutions

### Whiteboard

![repeatedWord Whiteboard 1](./repeated-word-whiteboard.jpg)
