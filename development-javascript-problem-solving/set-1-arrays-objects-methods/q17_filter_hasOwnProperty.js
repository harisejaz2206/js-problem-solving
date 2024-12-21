// Question 17: Using filter and Object.hasOwnProperty
// Filter out objects that do not contain the key `active`.

const objects = [{ active: true }, { inactive: false }, { active: false }];

// Expected Output: [{ active: true }, { active: false }]

// Write your code here:
console.log(objects.filter(object => !object.hasOwnProperty('inactive')))