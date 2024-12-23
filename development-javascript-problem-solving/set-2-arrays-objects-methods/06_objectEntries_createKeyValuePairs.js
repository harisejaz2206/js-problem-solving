// Question 6: `Object.entries`
// Given an object, use `Object.entries` to create an array of key-value pairs.

const car = { make: "Toyota", model: "Corolla", year: 2020 };
// Your code here
const entries = Object.entries(car)
console.log('entries: ', entries);

entries.map(entry => console.log(entry))