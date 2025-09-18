function matrixSums(arr) {
  const INITIAL_VALUE = 0;
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].reduce((accumulator, currentValue) => accumulator + currentValue, INITIAL_VALUE);
    resultArr.push(sum);
  }

  return resultArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]