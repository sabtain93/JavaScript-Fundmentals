function unshift(arr, val) {

  for (let i = arr.length; i >= 0; i--) {
    if (i === 0) {
      arr[i] = val;
    } else {
      arr[i] = arr[i - 1]
    }
  }

  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]