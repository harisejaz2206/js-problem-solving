// Question 20: Using some and forEach
// Check if any object in an array has a specific property and log the result.

const objects = [{ id: 1 }, { name: 'Alice' }, { active: true }];

// Expected Output: true (if `active` is the property checked)

// Write your code here:
const hasActiveProperty = objects.some(object => object.hasOwnProperty('active'))
console.log(hasActiveProperty);