function rotate90degrees_brute(matrix, n) {
  let answerArray = [];
  // Initialize answerArray with empty arrays
  for (let i = 0; i < n; i++) {
    answerArray.push([]);
  }

  console.log(answerArray);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answerArray[j][n - 1 - i] = matrix[i][j];
    }
  }
  return answerArray;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let n = 4;

console.log(rotate90degrees_brute(matrix, n));
