"use strict";
const odd = [3, 4, 5, 7, 9, 11, 13];
const even = [4, 6, 7, 10, 8, 12];

const findTheMisfit = (integers) => {
	let misfit;
	let odds = integers.filter((n) => n % 2 !== 0);
	let evens = integers.filter((n) => n % 2 == 0);
	if (odds.length < evens.length ? (misfit = odds[0]) : (misfit = evens[0]));

	return misfit;
};

// TEST CODE - DO NOT TOUCH ↓↓↓
const test = (arr, ans) => (findTheMisfit(arr) === ans ? "Pass" : "Fail");
console.log(test([2, 4, 6, 5, 8, 10], 5));
console.log(test([6, 1, 3, 5, 7, 9], 6));
console.log(test([10, 22, 34, 46, 58, 60, 111], 111));
