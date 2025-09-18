// input array
// output is two arrays
// 2 subarrays

// if length is even both sub arrays will have equal number of elements
// if the length is odd the first sub array will have the middle number

// [1 2 3 4]
// length is even
// [0, 1], [2, 3]

// [1 2 3 4 5]
// len is 5 which is odd
// middle index = 2 -> len - 1/2 = 5-1/2 = 2

// initialize two empty arrays

// if len is even
  // loop from 0 till half len - 1
    // add the elements from the input array into array 1
  // loop from half len till the end of thearray
    // add the elements from the input array into array 2
// if len is odd
  // loop from 0 till len - 1 / 2
    // add the elements to array to array 1
  // loop from (len -1 / 2) + 1 till end of the array
    // add the elements to array2

// return an array with array 1 ar index 0 and array 2 at index 1

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]