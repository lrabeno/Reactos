function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const logger = (node) => {
  console.log(node);
};

// First I would encourage the person you are interviewing to draw out
// the tree. Either in excalidraw or a code editor. Once the tree looks correct
// you can have them move forward with the rest of the reacto methods.

// Repeat: state the problem to check comprehension
// Examples: consider possible use and edge cases
// Approach: state strategy for accomplishing goal
// Code: implement strategy in a written program
// Test: check that example cases pass correctly
// Optimize: discuss ways of improving performance

// -------- REPEAT --------
// Write 2 functions, 1 called breadthFirst and another called.
// depthFirstSearch. Each function will take in a node (given to me),
// and a callback function(also given).

// breadthFirst will search in order or at each depth

// depthFirst will start at the root node and travel as deep as it can go on each // branch

// -------- EXAMPLES ------
/*
        TREE
          a
      /   |    \
     b    c     d
    /    /|\    /\
   e    f g h  i  j
  / \       |
  k  l      m
  */

// breadthFirst will log in order a, b, c, d, e, f, etc...
// depthFirst will log each branch a, b, e, k, l, c, f, g, etc..

// -------- APPROACH ---------

// breadthFirst
// Maybe a queue? an array?
// While loop?
// While the tree has a length we can use the
// callback to log each node.
// use .shift to take each node off the front
// push the current nodes children into the queue

// depthFirst
// Recursion?
// use the callback/logger first to log values
// use forEach on the nodes children and call the
// function again

// -------- CODE --------
const breadthFirst = (node, callback) => {
  // we use a queue to iterate over the tree
  // progressively adding the children as we go
  // The tree begins with the first node
  const queue = [node];

  // loop through the entire queue while it has a length
  while (queue.length) {
    // we shift off the array making it smaller as we iterate through
    // as we are treating it as first in first out
    const currentNode = queue.shift();
    callback(currentNode.value);
    // push each currentNode.value into the queue using spread syntax
    queue.push(...currentNode.children);
  }
};

// DFS will process child nodes before siblings.
//log the value and then call the function on each node
const depthFirstSearch = (node, callback) => {
  // logging each nodes value
  callback(node.value);
  // go through each of the nodes children and recursively
  // call DFS on them
  node.children.forEach((child) => {
    depthFirstSearch(child, callback);
  });
};

// ------- TEST --------
breadthFirst(a, logger);
console.log("----------------");
depthFirstSearch(a, logger);
