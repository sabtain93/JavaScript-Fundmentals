// input is 2 arrays
// output is a new array that has elements from both arrays

// [1, 2, 3,] and [4, 5, 6]
// result is [1, 2, 3, 4, 5, 6]

// iterate on array 1 and all the emlents into a seprate array
// iterate over array 2 and all the elements into the new array
// return the new array with all the lements from array 1 and array 2


function concat(arr1, arr2) {
  let concatedArr = [];

  for (let count = 0; count < 2; count++) {
    let currentArr;
    if (count === 0) {
      currentArr = arr1;
    } else {
      currentArr = arr2
    }

    for (let idx = 0; idx < currentArr.length; idx++) {
      push(concatedArr, currentArr[idx]);
    }
  }

  return concatedArr;

}

function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]