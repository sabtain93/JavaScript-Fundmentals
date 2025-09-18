function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}


let age = getRandomIntInclusive(20, 200);
console.log(`Teddy is ${age} years old!`);
