function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

/*
leftArray = [3, 6, 7];
rightArray = [1, 9, 6];
*/
