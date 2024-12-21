const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i < sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(13));
