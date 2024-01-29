const mirrow = (matrix, n) => {
  let result = [];

  for (let row = 0; row < n; row++) {
    result[row] = [];

    for (let col = 0; col < n; col++) {
      if (col - row === 2 && col - 2 >= 0) {
        result[row][col] = matrix[row][col - 2];
      } else if (col - row === 0 && col + 2 < n) {
        result[row][col] = matrix[row][col + 2];
      } else {
        result[row][col] = matrix[row][col];
      }
    }
  }
  return result;
};

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(mirrow(matrix, 3));
