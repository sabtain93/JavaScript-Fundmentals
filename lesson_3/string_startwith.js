// 2 inputs
// i/P 1 is a string  from which we have to check
// I/P 2 is a string we match with and check if I/P 1 start with it


// I/P 2 length must be less than I/P 1 if return false
// if second str 1st letter does not match return false
// if 2 nd str is empty return true
//if match return true

// return false if str 2 length os > str 1
// return true if str 2 is empty
// 
// save the length of str 1 as len1
// save the len of str2 as len2
// iterate for len2
// on each iteration match the current index of str 1 with str 2
// on nay iteration if there is no match return false
// if the iteration end and all the letters matched return true.

function startsWith(str, searchStr) {
  let len1 = str.length;
  let len2 = searchStr.length;

  for (let char = 0; char < len2; char++) {
    if (searchStr[char] !== str[char]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));       // true
console.log(startsWith(str, 'We put'));       // true
console.log(startsWith(str, ''));       // true
console.log(startsWith(str, 'put'));       // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false