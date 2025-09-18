function isXor(value1, value2) {
  if (!!value1 === true && !!value2 === false) {
    return true;
  } else if (!!value1 === false && !!value2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(isXor('2', 23)); 