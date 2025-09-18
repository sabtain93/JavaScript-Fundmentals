function uniqueElements(arr) {
  let uniqArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }

  return uniqArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]