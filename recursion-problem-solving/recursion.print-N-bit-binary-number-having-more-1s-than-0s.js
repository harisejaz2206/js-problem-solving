function solve(n, answerArray, onesCount, zeroesCount, initialAnswer) {
  if (n === 0) {
    answerArray.push(initialAnswer);
    return;
  }
  if (onesCount === 0 && zeroesCount === 0) {
    initialAnswer.push("1");
    onesCount++;
    n--;
    solve(n, answerArray, onesCount, zeroesCount, initialAnswer);
  }
  solve(n, answerArray, onesCount + 1, zeroesCount, initialAnswer);
  solve(n, answerArray, onesCount, zeroesCount + 1, initialAnswer);
}

function printNBitBinaryNumbers(n, answerArray) {
  console.log("n, answerArray", n, answerArray);
  let zeroesCount = 0;
  let onesCount = 1;
  let initialAnswer = "1";
  solve(n, answerArray, onesCount, zeroesCount, initialAnswer);
}

let input = 3;
let answerArray = [];
printNBitBinaryNumbers(input, answerArray);
