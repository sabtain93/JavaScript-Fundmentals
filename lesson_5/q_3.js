function copyProperties(obj1, obj2) {
  let numberOfProperties = 0;
  for (const property in obj1) {
    numberOfProperties += 1;
    obj2[property] = obj1[property]
  }
  return numberOfProperties;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }