// Question 19: Combining multiple methods
// Sort an array of objects by age, then extract the names of people older than 20.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 22 }
  ];
  
  // Expected Output: ['Charlie', 'Alice']
  
  // Write your code here:
  console.log(people.sort((a, b) => a.age - b.age).filter(person => person.age > 20).map(person => person.name))
  