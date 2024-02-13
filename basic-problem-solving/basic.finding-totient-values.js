function totientValues(a) {
  const factorsofA = [];
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      factorsofA.push(i);
    }
  }

  const allNumbersUntilA = [];
  for (let i = 1; i <= 33; i++) {
    allNumbersUntilA.push(i);
  }
  let finalTotientArray = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 0; j < factorsofA.length; j++) {
      if (i % factorsofA[j] === 0) {
        break;
      }
      if (j === factorsofA.length - 1) {
        finalTotientArray.push(i);
      }
    }
  }
  console.log(`The totient of ${a} is`, finalTotientArray.length);
  console.log(`Final totient array of ${a} is \n\n`, finalTotientArray);
}

totientValues(33);
// totientValues(64);
// totientValues(33);
// totientValues(40);
