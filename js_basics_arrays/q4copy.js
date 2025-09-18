
function concat(...arguments) {
  let newArr = [];

  for (const arg of arguments) {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        newArr.push(arg[i]);
      }
    } else {
      newArr.push(arg);
    }
  }

  return newArr;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'])); 