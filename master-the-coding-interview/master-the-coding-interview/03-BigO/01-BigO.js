/*

BigO:
- BigO notation is used to measure how long an algorithm takes to run

BigO scalability:
- When we grow bigger with our input how much the algorithm slows down.

Omega Notation ( Ω ) gives the best case complexity of an algorithm
Big O Notation ( O ) gives the worst case complexity of an algorithm
Theta Notation ( θ ) gives the average case complexity of an algorithm


BigO compliexity Chart:
Horrible:
  O(n!)
  O(2^n)
  O(n^2)---> Quadratic Time

Bad:
  O(nlogn)

Fair:
  O(n)  ---> Linear Time

Good:
  O(logn)

Excellent:
  O(1)  ---> Constant Time
*/
/*
const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let fish of large) {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  }
}

findNemo(large); //  O(n) or Liner Time
*/
///////////////////////////////////////
// O(1) or Constant Time
/*
O(1)
- Even if the size of input increases the runtime of the algorithm will be constant.
- No. of oprations can be O(1), O(2), ... O(100) but it will be constant for all the input.
*/

const boxesArr = [1, 2, 3, 4, 5, 6];

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

compressFirstBox(boxesArr); // O(1) or Constant Time

//////////////////////////
// BigO Exercise 1
/*
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n) as this line will run same as the number of input
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

= 3 O(1) + 4 O(n)
= BIG O(3 + 4n)
= BIG O(n)
*/

//////////////////////////
// BigO Exercise 2

/*
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;  // O(1)
  let b = 10;  // O(1)   
  let c = 50;  // O(1)

  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

= 1+1+1+1+n+n+n+n+n
= 4+5n
= O(n)
*/

/////////////////////////////
// BigO Rules
/*
Rule 1: Worst Case

- BigO only cares about the worst case scenario.
- The Worst Case scenario in above Nemo example is that Nemo is at the very end of the array.

*/
/*
Rule 2: Remove Constants
- We remove constant as they will have significantly less impact on runtime when the input is huge.

function printFirstitemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2); // O(1)
  let index = 0; // O(1)
  while (index < middleIndex) {
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi"); // O(100)
  }
}

= 1+1+1+(n/2)+(n/2)+100
= 2(n/2) + 103 (Remove 103)
= 2(n/2) (We also remove any type of multiplication or division Constants)
= O(n)


Another Function:

function compressBoxesTwice(boxes) {
  boxes.forEach((box) => {
    console.log(box); // O(n)
  });

  boxes.forEach((box) => {
    console.log(box); // O(n)
  });
}

= n+n
= 2n
= O(n)

*/

/*
Rule 3: Diffrent terms for inputs

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box); // O(n)
  });

  boxes2.forEach((box) => {
    console.log(box); // O(m)
  });
}

- Complexity of first loop depends on first input and complexity of second loop depends on second input.

= O(n+m)

*/

/*

O(n^2):

IMP:

- If inner loop is independent of the outer loop then the no. of iterations i.e. n  will be multiplied.

- If inner loop is dependent on the outer loop then no. of executions of inner loop for every outer loop is added.

e.g.:

const boxes = [1, 2, 3, 4, 5];

function logAllParirsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

- Inner loop is independent of the outer loop, therefore multiplication.
Assume n=10
For i,
i=1   i=2   i=3   i=4   ... i=10

j will start with
j=1   j=1   j=1   j=1   ... j=1

Inner Loop execution for i * j:
Therefore Time Complexity:
- O(n^2)


function logAllParirsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

- Inner loop is dependent on the outer loop, Therefore summation.
Assume n=10
For i,
i=1   i=2   i=3   i=4   ... i=10

j will start with
j=1   j=2   j=3   j=4   ... j=10

Inner Loop execution for i and j:
10     9     8     7    ...  1

Summation of these executions:
= 10+9+8+...1
= n(n+1)/2    (For n inner loop)
= n^2/2 + n/2
= n^2         (Remove Constants)
= O(n^2)      (Still the Complexity is O(n^2))
*/

/*
Rule 4: Drop Non Dominants

- Final Complexity of the algorithm will be the highest power term
- e.g. O(n2 + n + 1) = O(n^2)

function pritAllNumbersThenAllPairsOfSums(numbers) {
  numbers.forEach((number) => {
    console.log(number);
  });

  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
}

= O(n^2+n)
= O(n^2)
*/

/*
Space Complexity:

A program has two ways to remember things:
1. The Heap: Where variables are stored which we assign.
2. The Stack: Where we keep track of our function calls

What causes Space complexity?
Variables
Data Structures
Function Call
Allocations

- While calculating space complexity we do not consider the input as we do not have control over the size of the input.

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooo");
  }
}

Space Complexity of above function
= O(1) // We are only assigning value of i again and again

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

- Here we are creating a data structure and each item acquires an additional memory space for the input. Therefore the Space Complexity is O(n) 

*/
