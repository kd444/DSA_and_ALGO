///////////////////////////////////////
// Exercise-1
/*
Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
For Example:
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
should return false.
-----------
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
should return true.

2 parameters - arrays - no size limit
return true or false
*/

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

/*
As size of array is diffrent so it's Time Complexity is: O(a*b)
O(1) - Space Complexity
This was the brute force solution. Need not to bee coded.
*/

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties are the items in the array

  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      let item = arr1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exists on created object.
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }
  return false;
}

/*
As size of array is diffrent and as loops are no longer nested so it's Time Complexity is: O(a+b)
This function has Space Complexity of O(a), as we are creating a new Object that only stores values of the first array. 
*/

// Shorter function using JS some

function containsCommonItem3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

///////////////////////////////////////
// Exercise-2

/*
You are given a collection of numbers. You have to find a matching pair i.e. equal to a sum, which is also given
If there is a sum of pair of number in the Collection matching the sum print Yes else No.

arr1 = [1,2,3,9] sum=8
arr2 = [1,2,4,4] sum=8

The arrays are sorted.
*/

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
