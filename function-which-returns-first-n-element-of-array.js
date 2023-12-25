const retrieve = (array, n = 1) => {
  console.log("The array and n are:", array, n);
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(retrieve([1, 2, 3, 4, 5], 3));
