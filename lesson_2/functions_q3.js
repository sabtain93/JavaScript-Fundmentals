

// function average(arr) {
//   let total = 0;
//   for (let index = 0; index < arr.length; index++) {
//     total += arr[index];
//   }
//   return total / arr.length;
// }

// let result = average([1, 2, 6, 9, 22]);
// console.log(result);

function average(values) {
  let total = 0;
  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }

  return total / values.length;
}

console.log(average([1, 2, 6, 9, 22]));