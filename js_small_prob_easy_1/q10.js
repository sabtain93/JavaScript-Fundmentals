function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));