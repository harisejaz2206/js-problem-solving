function findEquivalencePoint(array) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }

  let leftSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum -= array[i];

    if (leftSum === totalSum) {
      return i;
    }
    
    leftSum += array[i];
    
  }

  return -1;
}

let array = [1, 2, 3, 4, 3, 2, 1];
console.log(findEquivalencePoint(array));
