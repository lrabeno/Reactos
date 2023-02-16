// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

/*
Write a function called chunk which takes in an array and a size.
I need to create a sub array where the length of each sub array is 
equal to the size passed into the function

*/

// -------- EXAMPLES ------

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// -------- APPROACH ---------

/*
Create an empty array to hold chunks. Can call it chunked 
chunked will hold a series of arrays. 

Iterate through the unchunked array, ie the array passed in to the function

Will need to retrieve the last element in the chunked array <-- will start as nothing 

If the last element does not exist, or if its length is equal to chunk size
  --push a new chunk into chunked with the current element

else add the current element into the chunk
*/

// -------- CODE --------

// function chunk(array, size) {
//   //chunked will hold all our sub arrays
//   const chunked = [];
//   // iterate through our array passed in
//   for (let element of array) {
//     //declare a variable for the last element in chunked array
//     const last = chunked[chunked.length - 1];
//     //if we dont have a last element or the last elements length === size
//     if (!last || last.length === size) {
//       //enter this block and push a new chunk array into chunked
//       chunked.push([element]);
//     } else {
//       //push into the chunk we are currently on
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// ------- TEST --------

// console.log(chunk([1,2,3,4,5], 2))

// ------- OPTIMIZATION ------

/*
Create an empty chunked array
Create an index to start at 0
while index < array.length
  push a slice of length size from the array into chunked array
  add size to the index

*/

function chunk(array, size) {
  //create empty array to hold sub arrays
  const chunked = [];
  //create index and start at zero. use let because it will change
  let index = 0;
  //loop while index is < length of the array
  while (index < array.length) {
    // slice off from index until the size and push into chunk
    chunked.push(array.slice(index, index + size));
    //incrrement the index so we don't have an infinite loop
    index += size;
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
