// input number
//log the odd numbers starting from 1 till passed in number


function logOddNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

logOddNumbers(19);