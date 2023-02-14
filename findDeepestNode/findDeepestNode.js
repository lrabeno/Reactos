// Code given to interviewer below

function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node("a");
let b = node("b");
let c = node("c");
let d = node("d");
let e = node("e");
let f = node("f");

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

// findDeepest(a) //val: f

/*
  
  Like the last tree Reacto Be sure to have your interviewee sketch an example tree. Once the tree looks correct you can have them move on with the other reacto methods.
  
  You may need to remind your interviewee of what depth means in a tree (the root has depth 0, and each node's depth is it's parent's depth + 1)
  
  Also, You may want to remind your interviewee that many tree problems have a depth-first and a breadth-first solution
  
  Remind them that each child of a tree node is it's own tree
  */

// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------
/*
  I am given a binary tree, meaning each node can only have a left and a right. 
  Write a function called findDeepest 
  findDeepest will return the deepest node ie the furthest down the tree or deepest level
  */

// -------- EXAMPLES ------
/*
      a
    /   \
   b     c
    \   /
    d  e
   /
  f
  
  Deepest node on the tree I am given will be f
  
  */

// -------- APPROACH ---------
// Recursion?
// checking both left and right nodes and traverse down the tree
// maybe use a queue?
// while loop?

// -------- CODE --------

// Solution Code (Depth First)
// const findDeepest = (node) => {
//   let deepestNode = node
//   let deepestLevel = 0
//   // find is a helper function which we'll recurse over
//   const find = (node, level = 0) => {
//     if (node) {
//       // if this node's level is deeper than the current "deepestLevel", replace it
//       if (level > deepestLevel) {
//         // The level will always be larger than the deepest level ensuring we find the right node
//         deepestNode = node;
//         console.log(level, 'level')
//         console.log(deepestLevel, 'deepestLevel')
//         //console.log(deepestNode.val, 'deepestNode')
//         deepestLevel = level;
//       }
//       // recursive cases: if node.left and/or node.left exist, call the function on each, increasing the level by 1
//       if (node.left) {
//         find(node.left, level + 1);
//       }
//       if (node.right) {
//         find(node.right, level + 1);
//       }
//       // the base case is implicit here: if there's no node.left or node.right, the function execution ends
//     }
//   }
//   find(node)
//   return deepestNode;
// };

// Solution Code (Breadth First)
const findDeepest = (node) => {
  // we use a queue to iterate over the tree
  let queue = [node];
  let current;
  while (queue.length > 0) {
    console.log(queue[0].val, "QUEUE");
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  // when we exit the while loop, it means we've seen every node, in breadth-first order
  //current will be the last node we saw, which will be the deepest node in the tree
  return current;
};
console.log(findDeepest(a));
