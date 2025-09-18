//input is a string and a number
// output is string repeated times number of times
// output is undefined if times is not a number or number less than 0
//if times is 0 empty stringis returned

// initialize an empty string
// iterate for times number of time
// on each iteration concatenate the string to the empty string
// return the value of the string initlized in the start


function repeat(str, times) {
  if (Number(times) !== times || times < 0) {
    return undefined;
  }

  let result = ''
  for (let count = 1; count <= times; count++) {
    result += str;
  }

  return result;

}

console.log(repeat('abc', 1));   // "abc"
console.log(repeat('abc', 2));   // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));   // ""
console.log(repeat('abc', 'a'));   // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));   // undefined
console.log(repeat('abc', '  '));   // undefined