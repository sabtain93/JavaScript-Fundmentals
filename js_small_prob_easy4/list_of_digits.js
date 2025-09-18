function digitList(number) {
  let strArr = String(number).split('');

  for (let idx = 0; idx < strArr.length; idx += 1) {
    parseInt(strArr[0], 10);
  }

  return strArr;

}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]