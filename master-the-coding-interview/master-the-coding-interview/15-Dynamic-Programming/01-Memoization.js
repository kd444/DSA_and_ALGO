/*
Dynamic Programming:
- It is just an optimization technique using caching other than that it is a buzz word.
- Dynamic Programming is a way to solve problem by breaking it down into a collection of sub problems solving each of those sub problems just once and storing their solutions in case next time the same sub problem occurs.
*/

function add80(n) {
  console.log("This function adds 80.");
  return n + 80;
}

const cache = {};

function memoizedAdd80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("This w");
    cache[n] = n + 80;
    return cache[n];
  }
}
