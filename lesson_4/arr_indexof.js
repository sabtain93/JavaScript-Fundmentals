function indexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}


console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));          // -1