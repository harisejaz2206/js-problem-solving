const fibonacci = (num) => {
  if (num === 1) {
    return 1;
  }

  if (num === 0) {
    return 0;
  }
  const result = fibonacci(num - 1) + fibonacci(num - 2);

  return result;
};

console.log(fibonacci(7));
