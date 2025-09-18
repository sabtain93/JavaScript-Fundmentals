// We need a piece of reusable code that returns the average of three numbers.
// Define a function named average that takes three parameters, a, b, and c, and returns their average.
// Call the function with three numbers and log the result.

function averageOfThree(a, b, c) {
  let avg = (a + b + c) / 3;
  return avg;
}

let result = averageOfThree(2, 2, 66);
console.log(result);