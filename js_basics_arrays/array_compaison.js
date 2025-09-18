
// initialize an empty array as index
// iterate over one array
// check if the current element is in the other array
// take note of the index of that and store it in the index array
// then check the next element
// if it is in the other array and the index of the element in the other array is not already
// store in the index array it means there is a match and then store the index in the index array
// if the element is not found or if the index of that element in the other array already exists then keep checking until the last element
// if not found
  // return false
// otherwise return true

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let indexArr = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && !indexArr.includes(j)) {
        indexArr.push(j)
        break;
      }
    }
  }
  return indexArr.length === array1.length;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));       // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));       // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));       // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));       // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));       // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));       // false
console.log(areArraysEqual([1, 1], [1, 1]));       // true
console.log(areArraysEqual([1, '1'], ['1', 1]));       // true