function solve(n, answerArray, onesCount, zeroesCount, initialAnswer) {
  if (n === 0) {
    answerArray.push(initialAnswer);
    return;
  }

  // Add '1' to the string
  let answer1 = initialAnswer + "1";
  solve(n - 1, answerArray, onesCount + 1, zeroesCount, answer1);

  // Add '0' only if there are more or equal '1's than '0's
  if (onesCount > zeroesCount) {
    let answer2 = initialAnswer + "0";
    solve(n - 1, answerArray, onesCount, zeroesCount + 1, answer2);
  }
  return answerArray;
}

function printNBitBinaryNumbers(n, answerArray) {
  if (n <= 0) return;
  let zeroesCount = 0;
  let onesCount = 1;
  let initialAnswer = "1";
  solve(n - 1, answerArray, onesCount, zeroesCount, initialAnswer);
}

let input = 5;
let answerArray = [];
printNBitBinaryNumbers(input, answerArray);
console.log(answerArray);
