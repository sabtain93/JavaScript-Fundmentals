function repeater(str) {
  let resultstr = '';

  for (let char = 0; char < str.length; char += 1) {
    resultstr += str[char] + str[char];
  }

  return resultstr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""