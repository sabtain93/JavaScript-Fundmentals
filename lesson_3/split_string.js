function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      console.log(newStr);
      newStr = '';
    } else if (delimiter === '') {
      console.log(str[i])
    } else {
      newStr += str[i];
    }
  }

  if (newStr) {
    console.log(newStr);
  }

}

splitString('hell;o', ';');