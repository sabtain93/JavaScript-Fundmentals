function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();
console.log(incrementCounter1());
console.log(incrementCounter1());
console.log(incrementCounter2());
console.log(incrementCounter2());