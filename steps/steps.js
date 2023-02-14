// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

/**
Write a function called steps that will take in a number
Steps will console.log NOT return a # with a space while 
cascading to look like steps. 
*/

// -------- EXAMPLES ------

//   steps(4)
//       '#   ' <-- 3 spaces
//       '##  ' <-- 2 spaces
//       '### ' <-- 1 space
//       '####' <-- 0 spaces

// NOTE: Whatever the number passed into steps will also be
// the number of characters in the console.log along with the
// amount of rows.

// -------- APPROACH ---------

// for loop 0 to n (iterate through rows)
// create an empty string
// for loop again from 0 to n (iterate through columns)
// if current column =< current row add '#' to the empty string
// else add a space.

// -------- CODE --------

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//       stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// ------- TEST --------

// steps(5)

// ------- OPTIMIZATION ------

// RECURSIVE SOLUTION

function steps(n, row = 0, stair = "") {
  // this is the base case and will end the function
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    // if the stair string has a length of n we are at the end
    // of the row
    console.log(stair);
    //print out the row
    return steps(n, row + 1);
    //return to exit this block and incriment the row
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  // call the function to go through again.
  steps(n, row, stair);
}

steps(5);
