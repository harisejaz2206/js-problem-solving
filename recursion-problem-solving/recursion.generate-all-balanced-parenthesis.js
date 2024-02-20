function solve(input, openCount, closeCount, answerArray, initialAnswer) {
  // base condition
  if (openCount === 0 && closeCount === 0) {
    answerArray.push(initialAnswer);
    return;
  }
  if (openCount === 0) {
    while (closeCount > 0) {
      initialAnswer += ")";
      closeCount--;
    }
    answerArray.push(initialAnswer);
    return;
  }
  if (openCount === closeCount) {
    initialAnswer += "(";
    openCount--;
    solve(input, openCount, closeCount, answerArray, initialAnswer);
    return;
  }
  let option1 = initialAnswer + "(";
  let option2 = initialAnswer + ")";

  solve(input, openCount - 1, closeCount, answerArray, option1);
  solve(input, openCount, closeCount - 1, answerArray, option2);
  return answerArray;
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
console.log(answerArray);
