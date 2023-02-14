// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// Repeat - take 2 strings, 1 being the haystack (string to search inside), the other being the
// needle (string we are using to search). We want to return the index of the first occurance
// of that string. If there is no string we will return negative 1.

// Examples - 'hello' <-- haystack 'el' would return 1

// Approach - loop through both strings and if they match I would return the index.
// for loop on the haystack
// for loop on the needle
// if both letters are not equal keep looping until the end
// if letters are equal return the index
// otherwise return -1

// Code
function indexOf(haystack, needle) {
  // for loop on the haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // for loop on the needle

    for (let j = 0; j < needle.length; j++) {
      console.log(haystack[i + j]);
      if (haystack[i + j] !== needle[j]) {
        // if both letters are not equal keep looping until the end
        break;
      }
      if (j === needle.length - 1) {
        // if letters are equal return the index
        return i;
      }
    }
  }
  // otherwise return -1
  return -1;
}

// Test
console.log(indexOf("my name is louis", "is"));
