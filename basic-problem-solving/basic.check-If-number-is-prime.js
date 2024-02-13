function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 10;
console.log(isPrime(number));
const number2 = 17;
console.log(isPrime(number2));
const number3 = 67;
console.log(isPrime(number3));
