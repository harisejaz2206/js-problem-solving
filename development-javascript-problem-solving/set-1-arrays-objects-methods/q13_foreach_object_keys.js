// Question 13: Combining forEach and Object.keys
// Log the keys of each object in an array to the console.

const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];

// Expected Output (in console):
// name, age
// name, age

// Write your code here:

users.forEach(user => {
    console.log(Object.keys(user))
})