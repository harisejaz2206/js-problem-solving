const retrieve = (array, n = 1) => {
  console.log("The array and n are:", array, n);
  let newArray = [];
  if (n <= array.length) {
    for (let i = 0; i < n; i++) {
      newArray.push(array[i]);
    }
  } else {
    console.log("The value of n is greater than the length of the array");
    return array;
  }
  return newArray;
};

console.log(retrieve([1, 2, 3, 4, 5], 3));
