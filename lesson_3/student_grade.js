let rlSync = require('readline-sync');

let gradeArr = [];

for (let i = 0; i < 3; i++) {
  gradeArr[i] = Number(rlSync.question(`Enter score ${i + 1}: `))
}

let avgGrade = gradeArr.reduce(
  (accumulator, grade) => accumulator + grade,
  0,
) / gradeArr.length;

if (avgGrade >= 90) {
  console.log('Based on the average of your 3 scores your letter grade is "A".');
} else if (avgGrade >= 70) {
  console.log('Based on the average of your 3 scores your letter grade is "B".');
} else if (avgGrade >= 50) {
  console.log('Based on the average of your 3 scores your letter grade is "C".');
} else {
  console.log('Based on the average of your 3 scores your letter grade is "F".')
}


