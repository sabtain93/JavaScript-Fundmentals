// Constructor call with no arguments - creating an empty Set
const setA = new Set();

// Using the 'add' method to add values to the set
setA.add(1);
setA.add(2);
setA.add(3);

// Check the size and content of setA
console.log(setA.size); // 3
console.log(setA);      // Set(3) { 1, 2, 3 }

// Adding objects to set
let arr = [6, 7];
setA.add(arr);
setA.add(arr);          // arr gets added once
setA.add([8, 9]);
setA.add([8, 9]);       // [ 8, 9 ] gets added twice
console.log(setA.size); // 6
console.log(setA);      // Set(6) { 1, 2, 3, [ 6, 7 ], [ 8, 9 ], [ 8, 9 ] }

// Using 'has' to check for an existing value
console.log(setA.has(2)); // true
console.log(setA.has(4)); // false
console.log(setA.has([8, 9]));

// Constructor call using an iterator (array)
// const setB = new Set([2, 3, 4, 5]);

// // Check the size and content of setB
// console.log(setB.size); // 4
// console.log(setB);      // Set(4) { 2, 3, 4, 5 }

// // Using the 'delete' method to remove an element from setB
// setB.delete(4);
// console.log(setB.size); // 3
// console.log(setB);      // Set(3) { 2, 3, 5 }

// // Performing union of setA and setB
// const unionSet = setA.union(setB);
// console.log(unionSet); // Set(7) {1, 2, 3, [ 6, 7 ], [ 8, 9 ], [ 8, 9 ], 5}

// // Performing intersection of setA and setB
// const intersectionSet = setA.intersection(setB);
// console.log(intersectionSet); // Set(2) { 2, 3 }

// // Using 'forEach' to iterate over the elements of setA
// setA.forEach(value => {
//   console.log(value);
// });
// // 1
// // 2
// // 3
// // [ 6, 7 ]
// // [ 8, 9 ]
// // [ 8, 9 ]
