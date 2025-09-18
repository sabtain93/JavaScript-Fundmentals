function swap(str) {
  let wordArray = str.split(' ');
  let result = [];

  wordArray.forEach( word => {
    let charArray = word.split('');
    let len = charArray.length;
    [charArray[0], charArray[len - 1]] = [charArray[len - 1], charArray[0]];
    result.push(charArray.join(''));
  });

  return result.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"