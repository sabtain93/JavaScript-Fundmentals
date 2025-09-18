function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function isPalindrome(str) {
  let array = str.split('');
  let arrayCopy = array.slice();

  return arrayEqual(arrayCopy.reverse(), array);

}

console.log(isPalindrome('madam'));      // true
console.log(isPalindrome('Madam'));       // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));       // true