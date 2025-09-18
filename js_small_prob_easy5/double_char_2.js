function doubleConsonants(str) {
  const vowels = 'aeiou'.split('');
  const vowelsUpper = 'aeiou'.toUpperCase().split('');
  let resultStr = '';

  for (let char = 0; char < str.length; char += 1) {
    if (vowels.includes(str[char]) || vowelsUpper.includes(str[char])) {
      resultStr += str[char];
    } else if (str[char] > 'a' && str[char] <= 'z') {
      resultStr += str[char] + str[char];
    } else if (str[char] > 'A' && str[char] <= 'Z') {
      resultStr += str[char] + str[char];
    } else {
      resultStr += str[char];
    }
  }

  return resultStr;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""