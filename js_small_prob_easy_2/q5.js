function triangle(size) {
  for (let i = 1; i <= size; i++) {
    let str = '';

    for (let j = size; j > i; j--) {
      str += ' ';
    }

    for (let k = 0; k < i ; k++) {
      str += '*'
    }
    console.log(str);
  }
}


triangle(5);
triangle(9);