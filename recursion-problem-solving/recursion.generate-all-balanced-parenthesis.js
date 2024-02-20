function solve(input, openCount, closeCount, answerArray, initialAnswer) {
  // base condition
  if (openCount === 0 && closeCount === 0) {
    answerArray.push(initialAnswer);
    return;
  }
}

function generateAllParentheses(input, answerArray) {
  let openCount = input;
  let closeCount = input;
  let initialAnswer = "(";
  openCount--;
  console.log("openCount, closeCount", openCount, closeCount);
  solve(input, openCount, closeCount, answerArray, initialAnswer);
}

var answerArray = [];
var input = 3;
generateAllParentheses(input, answerArray);
