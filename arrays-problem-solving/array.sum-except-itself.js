function sumExceptSelf(array) {
  const n = array.length;
  const result = [];

  let totalSum = array.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < n; i++) {
    result[i] = totalSum - array[i];
  }

  return result;
}

// Example usage:
let array = [1, 2, 3, 4];
console.log(sumExceptSelf(array)); // Output: [9, 8, 7, 6]
