function countOccurrences(array) {
  let obj = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (obj[array[idx]]) {
      obj[array[idx]] += 1;
    } else {
      obj[array[idx]] = 1
    }
  }
  
  for(let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1