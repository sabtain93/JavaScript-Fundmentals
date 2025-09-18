let rlSync = require('readline-sync');

let bill = rlSync.question('what is the bill? ');
bill = parseFloat(bill);


let tipPer = rlSync.question('What is the tip percentage? ');
tipPer = parseFloat(tipPer);

let tip = bill * (tipPer / 100);

let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);