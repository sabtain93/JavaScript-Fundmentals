function shortLongShort(str1, str2) {
  const LEN1 = str1.length;
  const LEN2 = str2.length;

  let result = '';

  if (LEN1 > LEN2) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }

  return result;
}

console.log(shortLongShort('', 'xyz')); 