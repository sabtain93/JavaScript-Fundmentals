// input - 3
// string, start number, length of substring

// output string
// can be empty string

// string input = 'hello World'
// start index is 2, length is 4
// result substr is 'llo ' 
// h e l l o   W o r l d - length of string is 11
// 0 1 2 3 4 5 6 7 8 9 10
//     - - - - => 'llo '
// start index is -ve => start index = strlength + start index
// start index -3 => start index = 11 + -3 = 8
// start index is 8, length of substr is 2 => 'rl'
// start index is 8, length of substr is 20 => 'rld'
// length is -ve => ''
// length is 0 => ''
// assume thatif length is <= 0 => result substr is ''

// string

// initialize resultStr to empty string
// if start index is less than 0
//  start index to strlength + start index
// iterate over the string starting from start index till the length off substr is less than or equal to str
//  append the resultStr with the current character
// return the resultStr


function substr(string, start, len) {
  let resultStr = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (let i = start; i < len + start; i++) {
    if (i >= string.length) {
      break;
    }
    resultStr += string[i];
  }

  return resultStr;
}

let string = 'hello world';

console.log(substr(string, 2, 4));    // "llo "
console.log(substr(string, -3, 2));    // "rl"
console.log(substr(string, 8, 20));    // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));    // ""