"use strict";

function isPossible(a, b, c, d) {
  console.log("execute", a, b, c, d);
  if (a == c && b == d) {
    return "Yes";
  } else if (a > c || b > d) {
    return "No";
  } else {
    isPossible(a + b, a + b, c, d);
    // isPossible(a, a + b, c, d);
  }
}

let result = isPossible(1, 1, 2, 2);
console.log(result);
