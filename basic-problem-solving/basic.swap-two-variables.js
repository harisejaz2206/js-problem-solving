const swapTwoVariables = (num1, num2) => {
  num1 = num1 + num2; // num1 = 15
  num2 = num1 - num2; // num2 = 5
  num1 = num1 - num2 // num1 = 10

  return [num1, num2]
};

console.log(swapTwoVariables(5, 10))

