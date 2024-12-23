// Question 13: `map` and `filter` - Combining with `filter`
// Given an array of numbers, use `filter` to select even numbers and then `map` to double each selected number.

const numbers = [1, 2, 3, 4, 5, 6];
// Your code here

console.log(numbers.filter(number => number % 2 === 0).map(number => number * 2))