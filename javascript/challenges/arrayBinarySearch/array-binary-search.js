const binarySearch = (arr, num) => {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (arr[middleIndex] === num) {
      return middleIndex;
    } else if (arr[middleIndex] < num) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return -1;
};
