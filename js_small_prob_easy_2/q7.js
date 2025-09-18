function twice(num) {
  let numStr = String(num);

  if (numStr.length % 2 === 0) {
    let rhs = '';
    let lhs = '';

    for (let i = 0; i < numStr.length / 2; i++) {
      rhs += numStr[i];
    }

    for (let i = numStr.length / 2; i < numStr.length; i++) {
      lhs += numStr[i];
    }

    if (rhs === lhs) {
      return num;
    } else {
      return num * 2;
    }
  } else {
    return num * 2;
  }
}




console.log(twice(37));      // 74
console.log(twice(44));      // 44
console.log(twice(334433));      // 668866
console.log(twice(444));      // 888
console.log(twice(107));      // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));      // 3333
console.log(twice(7676));      // 7676