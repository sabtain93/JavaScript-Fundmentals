function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
  }
  return total;
}


function average(arr) {
  return sum(arr) / arr.length;
}

let tempratures = [12, 20, 22, 98, 55];
console.log(average(tempratures));