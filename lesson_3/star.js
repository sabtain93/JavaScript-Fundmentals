
// takes on argument
//argument is a number greater than 1 and less than 10
// input number represents the number of rows and number of columns

// declare an variable and initialize to an empty string
// iterate from the number 1 till the input nStar value
// concatenate the current iteration value to the empty string
// iterate from current iteration of outer loop till one less than input value
// on each iteration concatenate '*' to the string
// output the current string vlaue





// function generatePattern (nStar) {

//   for (let lineNumber = 1; lineNumber <= nStar; lineNumber++) {
//     let str = '';

//     for (let digit = 1; digit <= lineNumber; digit++) {
//       str += String(digit);
//     }

//     for (let count = lineNumber + 1; count <= nStar; count++) {
//       str += '*';
//     }

//     console.log(str);
//   }

// }




function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let count = 1; count <= numberOfStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(20);