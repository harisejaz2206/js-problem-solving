// Question 14: Using map with Object.keys
// Create an array of all the keys present in each object of an array.

const objects = [{ a: 1, b: 2 }, { c: 3, d: 4 }];

// Expected Output: [['a', 'b'], ['c', 'd']]

// Write your code here:

const newArray = objects.map(object => Object.keys(object))
console.log('newArray: ', newArray);