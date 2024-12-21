// Question 11: Using some
// Check if there’s any user with `isActive: true` in an array of users.

const users = [
  { id: 1, isActive: false },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// Expected Output: true

// Write your code here:

console.log(users.some((user) => user.isActive === true))
