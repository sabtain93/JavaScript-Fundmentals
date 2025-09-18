function logMultiples(num) {
  for (let candidate = 100; candidate >= num; candidate--) {
    if ((candidate % num === 0) && (candidate % 2 === 1)) {
      console.log(candidate);
    }
  }
}

logMultiples(21);