function substr(string, start, len) {
  let resultStr = '';

  for (let i = start; i < len + start; i++) {
    if (i >= string.length) {
      break;
    }
    resultStr += string[i];
  }

  return resultStr;
}

function substring(string, start, end) {
  if (end < 0 || isNaN(end) && end !== undefined) {
    end = 0;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if ((start > 0 && end > 0) && (start < end && end <= string.length)) {
    let len = end - start;
    return substr(string, start, len)
  } else if (start > end) {
    let len = start - end;
    return substr(string, end, len);
  } else if (start === end) {
    let len = start - end;
    return substr(string, start, );
  } else if (end === undefined) {
    let len = string.length - start;
    return substr(string, start, len);
  }
}

let string = 'hello world';

console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"