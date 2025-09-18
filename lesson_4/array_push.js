//input is an array
// some value

// output - modify the input array by adding the value into the array
// return the length of the array

// [0, 1, 2] add 3
// add the value at then end of the array after the last value in the array

// find the length of the input array
// the last value in the array is at index array length - 1
// add the value in the array at array length index
// return the modified array length

function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}



let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]