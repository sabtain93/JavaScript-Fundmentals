// shift removes the first element from the array and returns that element
// empty array returns undefined
// the arrayis modified

// capture the first element from the array
// if it is undefined 
// return underfined
// if not
// iterate from the 2nd element to the last element
  // on each iteration place the current element on the index one less than the current element index
// reduce the length of the array by one
// return the first element captured

function shift(array) {
  let firstElem = array[0];

  if (firstElem == undefined) {
    return undefined;
  } else {
    for (i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
  }

  array.length = array.length - 1;
  return firstElem;
}



console.log(shift([1, 2, 3]));         // 1
console.log(shift([]));         // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// unshoft add one more elements into the array
// returns the new length of the array
// modifies the array

// array and the element passed
// capture the length of the arguments array
// if arg array has no element return the length of input array
// if it has elements
  // increse the length of the input array 
  // shift the element to the index = actual index + length of arguments array
// add the elements in the argumnet array one by one into the array stating at index 0
// return the new length of the array


function unshift(array, ...arg) {
  let argLen = arg.length;

  if (argLen === 0) {
    return array.length;
  } else {
    array.length = array.length + argLen;

  }
  return array.length;
}

console.log(unshift([1, 2, 3], 5, 6));      // 5
console.log(unshift([1, 2, 3]));      // 3
console.log(unshift([4, 5], [1, 2, 3]))      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]