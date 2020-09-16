'use strict';

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const mergedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  while (left.length) {
    mergedArr.push(left.shift());
  }

  while (right.length) {
    mergedArr.push(right.shift());
  }

  return mergedArr;
};

module.exports = mergeSort;
