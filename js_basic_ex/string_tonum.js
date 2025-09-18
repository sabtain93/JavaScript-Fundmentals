// input is a string of digits
// output is the number

// need an array of numbers from 0 to 9
// initialize result to 0
// check each character from the input string
// if the character is equal to any number in the array when converted to a string
  // take that number add it to result and multiply it by 10 to the power of length of string - the number of iteration
// return the reuslt which is a num

function stringToInteger(digitStr) {
  const ARRAY_OF_NUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;
  let iteration = 0;

  for (let i = 0; i < digitStr.length; i++) {
    iteration += 1;
    for (let j = 0; j < ARRAY_OF_NUM.length; j++) {
      if (digitStr[i] === String(ARRAY_OF_NUM[j])) {
        result += ARRAY_OF_NUM[j] * Math.pow(10, digitStr.length - iteration);
      }
    }
  }

  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570