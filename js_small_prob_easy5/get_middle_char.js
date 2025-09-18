function centerOf(string) {
  const length = string.length;
  if (length % 2 === 0) {
    return `${string[(length / 2) - 1] + string[length / 2]}`;
  } else {
    return `${string[(length - 1) / 2]}`;
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));      // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));      // "x"