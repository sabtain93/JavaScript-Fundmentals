// input is number 2 digit statring from 1 to 31
// output string 1 st, 2 nd, 3 rd, > 4 || 0 => th
// change the number into a string
// check the length of the number
// if it is one digit index 0 is the last digit
// if length is greater than 1
// index 1 is the last digit

// if the last digit is 1
  // return st
// if the last digit is 2
  // return nd
// if the last digit is 3
  // return rd
// if the last digit is > 4 or equal to 0
  // return th


function dateSuffix(date) {
  let str = String(date);
  let digit;

  if (str.length === 1) {
    digit = Number(str[0]);
  } else if (str[0] !== '1') {
    digit = Number(str[1]);
  }

  let suffixStr = 'th'

  if (digit === 1) {
     suffixStr = 'st';
  } else if (digit === 2) {
    suffixStr = 'nd';
  } else if (digit === 3) {
    suffixStr = 'rd';
  }

  return suffixStr;
}

function formatTime(date) {

  hour = date.getHours();
  mins = date.getMinutes();
 let result = "";
  if (String(hour).length > 1) {
    result = String(hour) + ':';
  } else {
    result = '0' + String(hour) + ':';
  }

  if (String(mins).length > 1) {
    result = result + String(mins);
  } else {
    result = result + '0' + String(mins);
  }

  console.log(result);

}

let today = new Date();
formatTime(today);
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let day = today.getDay();
let date = today.getDate();
let suffix = dateSuffix(date);
let month = today.getMonth();

