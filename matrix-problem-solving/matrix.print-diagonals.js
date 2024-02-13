const printDiagonals = (matrix, n) => {
  let primaryDiagonal = [];
  let secondaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        primaryDiagonal.push(matrix[i][j]);
      }
      if (i + j === n - 1) {
        secondaryDiagonal.push(matrix[i][j]);
      }
    }
  }
  console.log("primaryDiagonal", primaryDiagonal.join(" "));
  console.log("secondaryDiagonal", secondaryDiagonal.join(" "));
};

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printDiagonals(matrix, 3);
