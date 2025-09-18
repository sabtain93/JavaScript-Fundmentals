function copyAndReverse(arr) {
  return arr.concat(arr.slice().reverse());
  // let resultArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   resultArr.push(arr[i]);
  // }

  // for (let j = arr.length - 1; j >=0; j--) {
  //   resultArr.push(arr[j]);
  // }

  // return resultArr;
}

console.log(copyAndReverse([1, 2, 4, 5]));