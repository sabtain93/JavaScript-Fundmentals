const CURRENT_YEAR = 2025;
let rlSync = require('readline-sync');

let currentAge = parseInt(rlSync.question('what is your age? '), 10);
let retireAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);

console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + (retireAge - currentAge)}`);
console.log(`You have only ${retireAge - currentAge} years more to work`);

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!