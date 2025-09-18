// return a new array

// the end index is not included

function slice(arr, start, end) {
  let newArr = [];

  for (let i = start; i < end; i++) {
    push(newArr, arr[i]); 
  }

  return newArr;
}

function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));  // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]