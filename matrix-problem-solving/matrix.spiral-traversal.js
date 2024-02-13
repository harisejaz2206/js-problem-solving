const spiralTraversal = (matrix, n) => {
  let result = [];
  for (let col = 0; col < n; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < n; row++) {
        result.push(matrix[row][col]);
      }
    } else {
      for (let row = n - 1; row >= 0; row--) {
        result.push(matrix[row][col]);
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

console.log(spiralTraversal(matrix, matrix.length).join(" "));
