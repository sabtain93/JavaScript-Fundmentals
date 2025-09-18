function multiplyList(arr1, arr2) {
  let matrix = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let multiplication = arr1[idx] * arr2[idx];
    matrix.push(multiplication);
  }

  return matrix;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]