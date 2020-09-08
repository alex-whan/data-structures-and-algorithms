# Multi-Bracket Validation

### **[LINK TO CODE](https://github.com/alex-whan/data-structures-and-algorithms/blob/master/javascript/challenges/multiBracketValidation/multi-bracket-validation.js)**

## Challenge

Create a function called `multiBracketValidation(input)`. Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

- Round Brackets : `()`
- Square Brackets : `[]`
- Curly Brackets : `{}`

## Input/Output Examples

`enqueue(value)`

| Input                    | Output  |
| ------------------------ | ------- |
| `{} `                    | `TRUE`  |
| `{}(){} `                | `TRUE`  |
| `()[[Extra Characters]]` | `TRUE`  |
| `({}`                    | `FALSE` |
| `{(})`                   | `FALSE` |

## Approach & Efficiency

### Big O Time:

O(n): At worst, we will have to loop through and check every single character of an input of length `(n)`.

### Big O Space:

O(1)

## Diagrams & Solutions

### Whiteboard

![queueWithStacks Whiteboard 1](./queueWithStacks.png)
