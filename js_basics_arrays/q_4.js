
function concat(...arguments) {
  let newArray = [];

  for (let i = 0; i < arguments.length; i++) {
    let currentElem = arguments[i];
    if (Array.isArray(currentElem)) {
      for (let j = 0; j < currentElem.length; j++) {
        newArray.push(currentElem[j]);
      }
    } else {
      newArray.push(currentElem);
    }
  }

  return newArray;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]