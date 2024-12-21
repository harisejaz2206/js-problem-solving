// Question 8: Using filter
// Filter out objects with age less than 18 from an array of people.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 15 },
    { name: 'Diana', age: 25 }
  ];
  
  // Expected Output: [{ name: 'Bob', age: 20 }, { name: 'Diana', age: 25 }]
  
  // Write your code here:
  
  console.log(people.filter(person => person.age < 18))