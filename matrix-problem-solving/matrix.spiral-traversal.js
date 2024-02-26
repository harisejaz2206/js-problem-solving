const spiralTraversal = (matrix) => {
  let top = 0;
  let right = matrix[0].length;
  let left = 0;
  let bottom = matrix.length;

  for (let i = left; i < right; i++) {
    console.log(matrix[top][i]);
  }
  top++;

  for (let i = top; i < bottom; i++) {
    console.log(matrix[i][right]);
  }
  right--;

  for (let i = right; i < left; i--) {
    console.log(matrix[bottom][i]);
  }
  bottom--;

  for (let i = bottom; i <= top; i--) {
    console.log(matrix[i][left]);
  }
  left++;
};

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

spiralTraversal(matrix);
