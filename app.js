"use strict";


const findTheMisfit = (integers) => {
  
  // WRITE YOUR CODE HERE: ↓↓↓
  
  // The `integers` array contains all odd or all even integers
  const odd = [1,3,4, 5, 7, 9, 11, 13,];
  const even = [2, 4, 6 , 7, 10, 8, 12];
  // Except for one misfit that doesn't belong
  // Find the misfit in the array and return it
  // Type node app in the console below and hit enter to run the tests

  
  // NOTES: 
    // Length of `integers` array is > 3 && < 100
    // Integers array will only contain positive intergers
    // Extra cool points for one liner solution 😎
  
  return;
}


// TEST CODE - DO NOT TOUCH ↓↓↓
const test = (arr, ans) => (findTheMisfit(arr) === ans) ? 'Pass' : 'Fail';
console.log(test([2, 4, 6, 5, 8, 10], 5));
console.log(test([6, 1, 3, 5, 7, 9], 6));
console.log(test([10, 22, 34, 46, 58, 60, 111], 111));