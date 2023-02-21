// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------

/*

I am given a number as an argument. I must return that number 
but reverse the integers. 51 will be 15

NOTE: any numbers with zero at the end will be shaved off
500 will be 5

*/

// -------- EXAMPLES ------

//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// -------- APPROACH ---------

/*

will need to turn the number into a string. 
Can split the string turning it into an array
reverse the array using .reverse and then .join it back up
Use parseInt, math.sign(), or multiply the string by 1 or -1

*/

// -------- CODE --------

// function reverseInt(n) {
//   let split;
//   if (n < 0) {
//     split = n.toString().split('').reverse().slice(0, -1).join('') * -1;
//   } else {
//     split = n.toString().split('').reverse().join('') * 1
//   }
//   return split;
// }

// ------- TEST --------

// console.log(reverseInt(567))

// ------- OPTIMIZATION ------

// USING math.sign()
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-567));
