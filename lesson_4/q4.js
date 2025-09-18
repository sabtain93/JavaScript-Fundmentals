function arrayTOStr(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result += String(arr[i])
  }

  return result;
}