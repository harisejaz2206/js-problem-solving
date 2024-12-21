// 5! = 5 x 4 x 3 x 2 x 1
const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.log(factorial(5));
