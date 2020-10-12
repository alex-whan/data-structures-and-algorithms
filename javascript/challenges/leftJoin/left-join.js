'use strict';

// maybe call this "left" and "right" tables?
const leftJoin = (hashTable1, hashtable2) => {
  const outputArray = [];

  for (let word in hashTable1.buckets) {
    const synonym = hashTable1.buckets[word];

    let antonym = 'NULL';

    if (word in hashtable2.buckets) {
      antonym = hashtable2.buckets[word];
    }

    const temp = [word, synonym, antonym];

    outputArray.push(temp);
  }

  return outputArray;
};

module.exports = leftJoin;

// const leftJoin = (hashTable1, hashtable2) => {
//   let outputArray = [];

//   for (let i = 0; i < hashTable1.buckets.length; i++) {
//     // for (let item of hashTable1.buckets) {
//     let temp = [];
//     // if(hashTable1.buckets[i].length)
//     // console.log('hashTable1 BUCKETS at index: ', hashTable1.buckets[i][0][0]);
//     // Problem looks to be hashTable1.buckets[i] - at [i] specifically - this is where it becomes undefined
//     // console.log('HASH TABLE 1 ******', item[0]);
//     // console.log('HASH TABLE 1 ******', hashTable1.buckets[48][0]);
//     // console.log('TYPEOF*****', typeof hashTable1.buckets);

//     temp.push(hashTable1.buckets[i][0][0]);
//     temp.push(hashTable1.buckets[i][0][1]);
//     // temp.push(item[0][0]);
//     // temp.push(item[0][1]);

//     if (hashtable2.contains(hashTable1.buckets[i][0][0])) {
//       let valueToReturn = hashtable2.get(hashTable1.buckets[i][0][0]);
//       temp.push(valueToReturn);
//     } else {
//       temp.push(null);
//     }

//     outputArray.push(temp);
//   }

//   return outputArray;
// };
