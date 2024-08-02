const checkPrime = (numberToCheck) => {
  let i = 2;
  let isPrime;

  while (i < numberToCheck) {
    console.log(`${numberToCheck} % ${i}`, numberToCheck % i);
    if (numberToCheck % i === 0) {
      isPrime = true;
      break;
    }
    i++;
  }

  if (isPrime) {
    console.log("number is prime");
  } else {
    console.log("number is not prime");
  }
};

const number = 15;
checkPrime(number);
const number2 = 17;
checkPrime(number2);
