//We now need a function that calculates the sum of the same three values.
// Create a function named sum that takes the same three arguments as average, and returns the sum of the three arguments.
// Now modify average to call the sum function with those three arguments and use the return value to calculate the average.

function sum(a, b, c) {
  return (a + b+ c);
}

function averageOfThree(a, b, c) {
  let avg = sum(a, b, c) / 3;
  return avg;
}

let result = averageOfThree(2, 2, 66);
console.log(result);