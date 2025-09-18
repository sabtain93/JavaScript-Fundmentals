function oddElementsOf(arr) {
  let oddArr = [];

  for (let i = 1; i < arr.length; i = i + 2) {
    oddArr.push(arr[i]);
  }

  return oddArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]