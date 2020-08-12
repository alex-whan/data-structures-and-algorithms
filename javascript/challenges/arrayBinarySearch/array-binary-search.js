const binarySearch = (arr, num) => {
  let middleIndex = Math.floor((arr.length - 1) / 2);

  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (arr[middleIndex] !== num) {
    if (arr[middleIndex] > num) {
      lastIndex = middleIndex;
      middleIndex = Math.floor(lastIndex - firstIndex / 2);
    } else if (arr[middleIndex] < num) {
      firstIndex = middleIndex;
      middleIndex = Math.floor((lastIndex - firstIndex) / 2) + firstIndex;
    }

    if (firstIndex >= lastIndex) {
      return -1;
    }
  }

  return middleIndex;
};
