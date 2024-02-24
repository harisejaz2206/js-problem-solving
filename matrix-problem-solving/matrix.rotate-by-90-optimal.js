function rotate90degrees_optimal(matrix, n) {
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let n = 4;
console.log(matrix);
console.log(rotate90degrees_optimal(matrix, n));
