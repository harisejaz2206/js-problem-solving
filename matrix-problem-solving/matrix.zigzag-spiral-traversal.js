function zigzagRowTraversal(matrix) {
  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      // Left to right
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      // Right to left
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }
  
  return result;
}

function zigzagColumnTraversal(matrix) {
  let result = [];
  
  for (let j = 0; j < matrix[0].length; j++) {
    if (j % 2 === 0) {
      // Top to bottom
      for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][j]);
      }
    } else {
      // Bottom to top
      for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i][j]);
      }
    }
  }
  
  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(zigzagRowTraversal(matrix)); // Output: [1, 4, 7, 8, 5, 2, 3, 6, 9]
