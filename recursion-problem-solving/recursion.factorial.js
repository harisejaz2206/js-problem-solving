function factorial(n) {
  // 5! = 5 x 4 x 3 x 2 x 1
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1); // induction step
}

const number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`);
