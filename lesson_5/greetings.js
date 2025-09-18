function greetings(nameArr, detailsObj) {
  let fullName = nameArr.join(" ");

  console.log(`Hello, ${fullName}! Nice to have a ${detailsObj.title} ${detailsObj.occupation} around.`);
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

