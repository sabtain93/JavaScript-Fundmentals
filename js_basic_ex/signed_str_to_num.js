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

function stringToSignedInteger(digitStr) {
  let sign = '';

  if (digitStr.startsWith('-') || digitStr.startsWith('+')) {
    sign = digitStr[0];
    digitStr = digitStr.substring(1);
  }

  let result = stringToInteger(digitStr);

  if (sign === '-') {
    result = 0 - result;
  }

  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100