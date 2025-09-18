function wordSizes(string) {
  let wordArr = string.split(' ');
  let resultObj = {};

  wordArr.forEach(word => {
    if (resultObj[word.length]) {
      resultObj[word.length] += 1;
    } else if (word.length > 0) {
      resultObj[word.length] = 1;
    }
  });

  return resultObj;
}


console.log(wordSizes('Four score and seven.'));   // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));   // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));   // {}