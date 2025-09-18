function swapName(name) {
  let nameArray = name.split(' ');

  let [firstName, lastName] = nameArray;

  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"