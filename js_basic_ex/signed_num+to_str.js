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

function signedIntegerToString(number) {

  if (number / 0 === Number.NEGATIVE_INFINITY) {
    number *= -1;
    return '-' + integerToString(number);
  } else {
    let result = integerToString(number);
    if (result !== '0') return '+' + result;
    return result;
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));       // "0"