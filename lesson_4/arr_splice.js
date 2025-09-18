// modifies the array
// returns a new array

// starts removing at the start index provided
// removes the numbers of elements provided as input

// [1, 2, 3, 4, 5, 6, 7, 8]
// start is 2 and number is 5
// idx 2 is 3
// [3, ]
// replace idx 2 with the value at idx = current idx + number which is idx = 2 + 5 = 7
// now array is modified to [1, 2, 8, 4, 5, 6, 7, 8]
// extract the elemnets from the array whose index are between start and start + number - 1
// so the indexes required are idx 2 till 6
// 

// initialize an empty array
// iterate over the input array starting from the start index till the lengthof the input array
// check if the current index is less than the sum of the start and the number of elements
//  then push the element at the current index into the empty array
// reassign the value on the current index by the value of current index + number of elements
// modify the input array length by subtracting the length of new array from the length of input array
// return the new array


function splice(arr, start, count) {
  let extractedArr = [];

  for (let i = start; i < arr.length; i++) {
    if (i < start + count) {
      push(extractedArr, arr[i]);
    }

    arr[i] = arr[i + count];
  }
  arr.length = arr.length - extractedArr.length;
  return extractedArr;
}

function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]