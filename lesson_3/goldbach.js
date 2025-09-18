function isPrime (num){
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  for (let i = 2; i <= (expectedSum - 3); i++) {
    if (isPrime(i)) {
      for (let j = (expectedSum - 3); j >= 2 ; j--) {
        if (i > j) {
          break;
        } else if (isPrime(j)) {
          if ((i + j) === expectedSum) {
            console.log(i, j);
          }
        }
      }
    }
  }
 
}

checkGoldbach(3);