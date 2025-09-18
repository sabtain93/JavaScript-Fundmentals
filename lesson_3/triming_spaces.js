function leftTrim(str) {
  resultStr = '';
  copy = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && copy === false) {
      continue;
    } else {
      copy = true;
      resultStr += str[i];
    }
  }
  return resultStr;
}

function rightTrim(str) {
  resultStr = '';
  copy = false;
  strLen = str.length;

  for (let i = strLen - 1; i >= 0 ; i--) {
    if (str[i] === ' ' && copy === false) {
      continue;
    } else {
      copy = true;
      resultStr = str[i] + resultStr;
    }
  }
  return resultStr;
}



function trim(str) {
  leftTrimStr = leftTrim(str);
  trimStr = rightTrim(leftTrimStr);
  console.log(trimStr);
}

trim('      ');   // ""
trim('');         // ""
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
