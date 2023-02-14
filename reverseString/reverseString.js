// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

// Write a function that takes in a string as an arguement.
// My output should also be a string but with the argument reversed.

// -------- EXAMPLES ------

// reverse('ben') === 'neb'
// reverse('louis') === 'siuol'
// reverse('Reactos are fun!') === '!nuf era sotcaeR'

// -------- APPROACH ---------

//  1.
//   a. Create an empty string
//   b. Loop from the end to the beggining
//   c. Add each character to the string
//   d. Return reversed string

//  2.
//   a. Split the string using .split method
//   b. use the .reverse method to reverse the string
//   c. use .join to put the string back together
//

// -------- CODE --------
// --------

// Scenario 1 with a for loop
// ---------
// function reverse(str) {
//   // a. Create an empty string
//   let reversed = '';
//   // b. Loop from the end to the beggining
//   for (let i = str.length -1; i >= 0; i--) {
//     // creating a variable to hold each letter in the str
//     const char = str[i];
//     // c. Add each character to the string
//     reversed += char;
//   }
//   // d. Return reversed string
//   return reversed;
// }

// Scenario 2 using .split .reverse .join

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// ------- TEST --------
// console.log(reverse('Reactos are fun!'))

// ------- OPTIMIZATION ------

// USING REDUCE!!!

function reverse(str) {
  // first split the string as usual
  // then use reduce initialized with an empty string
  return str.split("").reduce((accum, char) => char + accum, "");
  // ^ reduce is taking your empty string
  // starts ''
  // 'R' <--- starts with R
  // 'eR' <---- adds the next value to what is already there
  // 'deR' and so on
}

console.log(reverse("Reduce rules!"));
