function insertShiftArray(arr, item) {
  let slicePointOne = Math.floor(arr.length / 2);
  let slicePointTwo = Math.ceil(arr.length / 2);

  let firstArr = arr.slice(0, slicePointOne);
  let secondArr = arr.slice(slicePointTwo);

  let newArray = [...firstArr, item, ...secondArr];
  return newArray;
}

module.exports = insertShiftArray;
