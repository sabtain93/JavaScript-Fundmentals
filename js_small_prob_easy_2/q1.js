// input string
// string
// collapse the conseuctive repeated word
// emoty string result in empty string 
// if no consecutive repeated word return the same string value


// 'gggggg ggg'
// reuslt => 'g g'
// split string into words

// string and array


// initialize a result variable to  empty string
// iterate over the input string
// initialieze a temp variable to empty string
// each character is stored in temp
// check if the last added charcter in the result string is the same as temp
//    if same do the add the current character to the result string as it already exist consectively
//    move on to next iteration
// if the last character added is not the same a sin temp
//  add the current character into  the result string

// return the result string

function crunch(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (result[result.length - 1] !== temp) {
      result += temp;
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));    // "4abcabcba"
console.log(crunch('ggggggggggggggg'));   // "g"
console.log(crunch('a'));    // "a"
console.log(crunch(''));