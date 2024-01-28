const printStairs = (matrix, n) => {
  let result = [];

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      if (row === col) {
        result.push(matrix[col][col]);
      } else if (col - row === 1) {
        result.push(matrix[col][row]);
      }
    }
  }
  return result.join(", ");
};

// Example usage:
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(printStairs(matrix, 4));
