// Question 15: `map` - Chaining Multiple `map` Operations
// Given an array of numbers, use `map` twice: first to add 2 to each number, then to square the result.

const numbers = [1, 2, 3, 4];
// Your code here

console.log(numbers.map(number => number + 2).map(number => number * number))