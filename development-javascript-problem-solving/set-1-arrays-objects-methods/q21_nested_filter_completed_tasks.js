// Question 21: Advanced Nested Operations
// Extract the names of all users who have more than two tasks completed.

const users = [
    { name: 'Alice', tasks: [{ completed: true }, { completed: false }, { completed: true }] },
    { name: 'Bob', tasks: [{ completed: false }] },
    { name: 'Charlie', tasks: [{ completed: true }, { completed: true }, { completed: true }] }
  ];
  
  // Expected Output: ['Charlie']
  
  // Write your code here:
  console.log(users.filter(user => {
    const completedTasks = user.tasks.filter(task => task.completed).length
    return completedTasks > 2
  }).map(user => user.name))