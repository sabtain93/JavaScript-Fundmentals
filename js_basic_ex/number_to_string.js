// input is a number positive integer or 0
// output is the string representation of the input integer

// 4321 -> '4321'
// 0 -> '0'
// 5000 -> '5000'


// cretea constant number array with numbers
function integerToString(number) {
  const NUM_ARR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let digit = (number % 10);
    result = NUM_ARR[digit] + result;

    number = Math.floor(number / 10);
  } while (number > 0)

  if (!result) return '0';

  return result;
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));       // "0"
console.log(integerToString(5000));      // "5000"