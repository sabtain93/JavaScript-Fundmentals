const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.question());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.question());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);