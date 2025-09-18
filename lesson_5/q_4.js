// input is a string
// output is an object

// count the each word in the string 
// create4 an object where the words are the property and the count of each word is the value

// create an empty obj
// take the string and break into words and save it into an array
// create a copy of the array with only unique elements
// iterate over each element in the unique array
// check if how many times it occurs in the original array
// add the word and its count into the empty obj

function wordCount(str) {
  let obj = {};
  let wordArr = str.split(" ");
  let uniqArr = uniqueElements(wordArr);

  for (const word1 of uniqArr) {
    let count = 0;
    for (const word2 of wordArr) {
      if (word1 === word2) {
        count += 1;
      }
    }
    obj[word1] = count;
  }

  return obj;
}

function uniqueElements(arr) {
  let uniqArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }

  return uniqArr;
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }