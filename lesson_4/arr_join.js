// input is an array and a string
// output is a string
// coerce each element in the array to string and concat the input string with it
// the last element is not concatenated

//

function join(arr, str) {
  let resultStr = '';

  for (let i = 0; i < arr.length - 1; i++) {
    let currentStr = String(arr[i]) + str
    resultStr += currentStr;
  }

  resultStr += String(arr[arr.length - 1]);
  return resultStr;
}




console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));        // '1 and 2 and 3'