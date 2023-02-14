// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------
// Writing a function called vowels that will take in a string.
// The function will count the amount of vowels used in a string
// Will return a number
// vowels are a, e, i, o, u
// NOT Y

// -------- EXAMPLES ------
// hi ---> 1 vowel
// hello ---> 2 vowels
// how are you ---> 5 vowels

// -------- APPROACH ---------

// Aproach 1:
// initialize a counter
// loop through the entire string
// add to the counter if you see a vowel
// return the counter

// Approach 2:
// using regex and .match check for vowels
// return the length of the regex.

// -------- CODE --------

// Using regex

function vowels(str) {
  //using regex check if any vowel is in the string
  const matches = str.match(/[aeiou]/gi);
  //if we have a match return the length otherwise 0.
  return matches ? matches.length : 0;
}

// Iterative solution

// function vowels(str) {
//   //initialize a counter
//   let count = 0;
//   //make sure the string passed in is all lowercase
//   //to account for any uppercase letters
//   let lower = str.toLowerCase();
//   //loop through the whole string
//   for (let i = 0; i <= lower.length - 1; i++) {
//   //if we find a cowel add 1 to the count
//     if (lower[i] === 'a') {
//       count++;
//     } else if (lower[i] === 'e') {
//       count++;
//     } else if (lower[i] === 'i') {
//       count++;
//     } else if (lower[i] === 'o') {
//       count++;
//     } else if (lower[i] === 'u') {
//       count++;
//     }
//   }
//   return count;
// }

// iterative solution with a helper and .includes

// function vowels(str) {
//   //initialize a counter
//   let count = 0;
//   //initialize an array with the vowels in it
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   //loop through the entire string
//   for (let i = 0; i <= str.length - 1; i++) {
//     let letter = str[i];
//     //using the includes method we will see if
//     //any vowel in the checker is part of the str
//     if (checker.includes(letter.toLowerCase())) {
//       //increase the count
//       count++;
//     }
//   }
//   return count;
// }

// ------- TEST --------

console.log(vowels("Hi ThErE!"));
