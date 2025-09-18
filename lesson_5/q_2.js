function incrementProperty(obj, str) {
  if (objectHasProperty(obj, str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }
  return obj[str];
}

function objectHasProperty(obj, str) {
  let property = Object.keys(obj);
  return property.includes(str);
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }