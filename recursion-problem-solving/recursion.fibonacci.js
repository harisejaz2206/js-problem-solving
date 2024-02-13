function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let answer = fibonacci(n - 1) + fibonacci(n - 2);
    return answer;
  }
}

console.log(fibonacci(7)); // Outputs: 13
