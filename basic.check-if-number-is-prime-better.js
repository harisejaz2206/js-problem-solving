function isPrimeBetter(number) {
  if (number <= 1) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(number));
  console.log("the square root of the following number is:", sqrt);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 10;
console.log(isPrimeBetter(number));
const number2 = 17;
console.log(isPrimeBetter(number2));
const number3 = 67;
console.log(isPrimeBetter(number3));
