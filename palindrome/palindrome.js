// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

// I am given a string and need to check if it is
// a palinndrome. A palindrome is a word that is the same
// from back to front. If it is a palindrome I will return true,
// otherwise I'll return false.

// -------- EXAMPLES ------
// 'racecar' - true
// 'aibohphobia' - true
// 'louis' - false :(

// -------- APPROACH ---------

/*
need to split the string to use array methods
could use a for loop?
can use .reverse to reverse the string and check from back to front
use .join to put back together 
could also use .reduce to check these 
return true if the string is equal to the reversed string
*/

/* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */

// const underFifty = [1, 6, 12, 30, 51];
// console.log(underFifty.every(num => num < 50));

// -------- CODE --------

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   if (reversed !== str) {
//     return false;
//   }
//   return true;
// }

// USING REDUCE
// function palindrome(str) {
//   const reversed = str.split('').reduce((word, letter) => {
//     return letter + word;
//   }, '');
//   if (reversed !== str) {
//     return false;
//   }
//   return true;
// }

// Iterating using .every()
function palindrome(str) {
  // str[str.length - i - 1] means you subtract the
  // index from the back at i. You subtract what index from
  // the back and then .every compares them from the front.
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// ------- TEST --------

console.log(palindrome("abba"));

// ------- OPTIMIZATION ------
