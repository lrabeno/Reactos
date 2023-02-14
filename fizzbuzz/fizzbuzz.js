// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

// Write a function that takes in a number as an arguement.
// If the number is divisable by 3 console log fizz
// If the number is divisable by 5 console log buzz
// If the number is divisable by both 3 and 5 console log fizzbuzz!
// NOTE: should not return a value but console log instead.

// -------- EXAMPLES ------

// fizzBuzz(15)
/*
        1
        2
        fizz  <--- divisable by 3 prints fizz
        4
        buzz  <--- divisable by 5 prints buzz
        fizz
        7
        8
        fizz
        buzz
        11
        fizz
        13
        14
        fizzbuzz <--- divisable by both 3 and 5 prints fizzbuzz!
*/

// -------- APPROACH ---------

//  1.
//   a. Loop up to an including the number <=
//   b. Check if the number is divisable by 3 and 5, % &&
//   c. Check if the number is divisable by 3 %
//   d. Check if the number is divisable by 5 %
//   e. console log each number accordingly
//   f. NOTE: should not return a value but console log instead.

// -------- CODE --------

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// ------- TEST --------
fizzBuzz(100);

// ------- OPTIMIZATION ------
