// pop removes the last element from the input array and returns that element
// calling pop on an empty array returns undefined
// mutates the array

// [1, 2, 3] => 3
// [1, 2]

// save the last element of the input array
// modify the length of the array by reducing the lenght by one
// return the last element saved

function pop(array) {
  let lastElement = array[array.length - 1];

  if (array.length !== 0) {
    array.length = array.length - 1;
  }

  return lastElement;
}


// pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push take one input array and multiple vlaues that are to be added to the array at the end of the array
// modifies the input array
// return the new length of the array

function push(array, ...arg) {

  for (let i = 0; i < arg.length; i++) {
    array[array.length] = arg[i];
  }

  return array.length;
}





//push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));           // 1
console.log(push([]));           // 0