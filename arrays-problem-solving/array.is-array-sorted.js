function isArraySorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 7, 2, 9, 1];

console.log(isArraySorted(sortedArray));
console.log(isArraySorted(unsortedArray));
