function lastNOf(arr, count) {
  let start = arr.length - count;

  if (start < 0) {
    start = 0;
  }
  return arr.slice(start);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 9));    // returns [16, 23, 42]