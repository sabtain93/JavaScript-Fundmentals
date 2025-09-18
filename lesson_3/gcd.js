function gcd(num1, num2) {

  while (num1 !== 0 && num2 !== 0) {
  if (num1 > num2) {
    num1 = num1 % num2;
    }else {
      num2 = num2 % num1;
    }
  }

  if (num1 === 0) {
    return num2;
  } else {
    return num1;
  }
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));