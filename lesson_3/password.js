let rlSync = require('readline-sync');

let password = 'password';

let count = 0;

for (; count < 3; count++) {
  let input = rlSync.question('What is the password: ');

  if (input === password) {
    console.log('You have successfully logged in');
    break;
  }
}

if (count === 3) {
  console.log('You have been denied access');
}




