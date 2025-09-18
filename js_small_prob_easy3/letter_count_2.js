function wordSizes(string) {
  let wordArr = string.split(' ');
  let resultObj = {};

  wordArr.forEach(word => {
    word = cleanWord(word.toLowerCase());
    if (resultObj[word.length]) {
      resultObj[word.length] += 1;
    } else if (word.length > 0) {
      resultObj[word.length] = 1;
    }
    console.log(resultObj);
  });

  return resultObj;
}

function cleanWord(word) {

  let charsArr = word.split('');
  let resultStr = '';

  charsArr.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      resultStr += char;
    }
  });

  return resultStr;
}

// console.log(wordSizes('Four score and seven.'));   // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));   // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));   // {}