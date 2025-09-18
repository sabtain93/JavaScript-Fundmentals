function missing(arr) {
  let missingArr = [];
  let incrementer = 1;
  let currentElem = arr[0];
  let lastElem = arr[arr.length - 1];
  while (currentElem < lastElem) {
    currentElem = arr[0] + incrementer;

    if (!arr.includes(currentElem)) {
      missingArr.push(currentElem);
    }

    incrementer += 1;
  }
  return missingArr;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                   // []
console.log(missing([1, 5]));                   // [2, 3, 4]
console.log(missing([6]));                   // []