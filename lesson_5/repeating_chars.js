// input string
// output obj
// count each charcters frequency in the input word
// case does not matter
// only include letter that have a frequency of two or more
// if no repeated letter return empty object

// initialize resultObj to empty object
// initialize count to 1
// iterate over the string 
// for each letter compare it to the each letter in the string ignoring case and skipping the checking the current character 
// with itself
  // if a match is found incremnet count by one
// if count for the curretn character is > than 1 add the character in the resultObj with its value as its count
// reset count to 1
// return the resultObj

function repeatedCharacters(words) {
  let resultObj = {};
  let count;

  words = words.toLowerCase();

  for (let i = 0; i < words.length; i++) {
    count = 1;
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      }

      if (words[i] === words[j]) {
        count += 1;
      }
    }
    if (count >= 2) {
      resultObj[words[i]] = count;
    }
  }

  return resultObj;
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));     // {}
console.log(repeatedCharacters('Paper'));     // { p: 2 }
console.log(repeatedCharacters('Baseless'));     // { s: 3, e: 2 }
