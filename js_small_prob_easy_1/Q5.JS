let rlSync = require('readline-sync');

let num = rlSync.question('Please enter an integer greater than 0: ');
num = Number(num);

let operation = rlSync.question('Enter "s" to compute sum, or "p" to compute the product. ');

let result;

if (operation === 's') {
  result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${result}`);
} else if (operation === 'p') {
  result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${result}`);
}
