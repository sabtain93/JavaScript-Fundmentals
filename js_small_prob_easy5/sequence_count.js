function sequence(count, start) {
  let array = [];

  for (let num = 1; num <= count; num += 1) {
    array.push(start * num);
  }

  return array;
}

console.log(sequence(5, 1));     // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));     // [-7, -14, -21, -28]
console.log(sequence(3, 0));     // [0, 0, 0]
console.log(sequence(0, 1000000));    // []