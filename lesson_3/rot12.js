function add13(num) {
  return num + 13;
}

function minus13(num) {
  return num - 13;
}

function rot13(str) {
  const CHAR_CODE_A = 'A'.charCodeAt();
  const CHAR_CODE_M = 'M'.charCodeAt();
  const CHAR_CODE_N = 'N'.charCodeAt();
  const CHAR_CODE_Z = 'Z'.charCodeAt();
  const CHAR_CODE_a = 'a'.charCodeAt();
  const CHAR_CODE_m = 'm'.charCodeAt();
  const CHAR_CODE_n = 'n'.charCodeAt();
  const CHAR_CODE_z = 'z'.charCodeAt();

  let resultStr = '';

  for (let i = 0; i < str.length; i++) {
    let asciiNum = str.charCodeAt(i);

    if (asciiNum >= CHAR_CODE_A && asciiNum <= CHAR_CODE_M) {
      asciiNum  = add13(asciiNum);
      resultStr += String.fromCharCode(asciiNum);
    } else if (asciiNum >= CHAR_CODE_N && asciiNum <= CHAR_CODE_Z) {
      asciiNum = minus13(asciiNum);
      resultStr += String.fromCharCode(asciiNum);
    } else if (asciiNum >= CHAR_CODE_a && asciiNum <= CHAR_CODE_m) {
      asciiNum  = add13(asciiNum);
      resultStr += String.fromCharCode(asciiNum);
    } else if (asciiNum >= CHAR_CODE_n && asciiNum <= CHAR_CODE_z) {
      asciiNum = minus13(asciiNum);
      resultStr += String.fromCharCode(asciiNum);
    } else {
      resultStr += str[i];
    }
  }

  return resultStr;
}

console.log(rot13(''));