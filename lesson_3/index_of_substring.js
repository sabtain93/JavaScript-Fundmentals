function substr(string, start, len) {
  let resultStr = '';

  for (let i = start; i < len + start; i++) {
    if (i >= string.length) {
      break;
    }
    resultStr += string[i];
  }

  return resultStr;
}

function indexOf(firstString, secondString) {
  const LenOf1stStr = firstString.length;
  const LenOf2ndStr = secondString.length;

  for (let i = 0; i <= LenOf1stStr - LenOf2ndStr; i++) {
    subStr = substr(firstString, i, LenOf2ndStr)
    if (subStr === secondString) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  const LenOf1stStr = firstString.length;
  const LenOf2ndStr = secondString.length;

  for (let i = LenOf1stStr - LenOf2ndStr; i >= 0; i--) {
    subStr = substr(firstString, i, LenOf2ndStr)
    if (subStr === secondString) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                    // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                    // -1

console.log(lastIndexOf('Some strings', 's'));  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));  // -1