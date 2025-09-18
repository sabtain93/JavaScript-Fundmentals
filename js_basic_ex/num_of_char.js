const readlineSync = require("readline-sync");

let phrase = readlineSync.question(console.log("Please enter a Phrase: "));

let phraseLength = phrase.length;

console.log(`There are ${phraseLength} characters in "${phrase}"`);