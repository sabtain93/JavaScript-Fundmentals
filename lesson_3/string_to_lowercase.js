// input is a string
//output is a string
//output is the lowercase version of the input string

// if a char is already in lower case it is returned as it is
// numeric string are also returned as it is

// strings

// find the ascii number for 'A' and 'Z'.
// initialize an empty string
// iterate over the string 
// for each char in the string find its ascii number
// if the ascii number of current char is between the ascii number of 'A' and 'Z'
//   then find the ascii number of the current character
//  add 32 to it and find the char at that ascii number and append it to the empty string
// if not
//  add the current character as it is to the empty string
// return the result string

function toLowerCase(str) {
  const A_ASCII_NUM = `A`.charCodeAt();
  const Z_ASCII_NUM = 'Z'.charCodeAt();

  let resultStr = '';

  for (let i = 0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();

    if (asciiNum >= A_ASCII_NUM && asciiNum <= Z_ASCII_NUM) {
      asciiNum += 32;
      resultStr += String.fromCharCode(asciiNum);
    } else {
      resultStr += str[i];
    }
  }
  return resultStr;
}

console.log(toLowerCase('123abcDEF'));