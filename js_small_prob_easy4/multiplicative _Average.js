function showMultiplicativeAverage(array) {
  const length = array.length;
  const INITIAL_VALUE = 1;
  const multiplication = array.reduce((accumulator, value) =>
    accumulator * value, INITIAL_VALUE,
  );

  return (multiplication / length).toFixed(3);
}


console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"