/*

Merge Sort

Time Complexity:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

Space Complexity: O(n)
- Description: A divide-and-conquer algorithm that divides the array into halves, sorts each half, and then merges them back together.

*/

/*
Breaking Down the Time Complexity:

Dividing the Array (Recursive Splitting):
- At each step, the array is divided into two halves until the base case (a single element) is reached.
This division process can be visualized as a binary tree, where each level represents a recursive split.
The depth of this tree is log₂(n), which is the number of times you can divide n elements in half until you reach single elements. Therefore, the depth is log n.

Merging the Array:
- After dividing, the merging process starts from the bottom of the binary tree and works its way back up.
At each level, all elements are merged back together. Merging two halves requires iterating over each element, making it an O(n) operation at each level.
There are log n levels (as explained above), and at each level, merging takes O(n) time.

Total Time Complexity:
To calculate the total time complexity, we multiply the time taken at each level by the number of levels:

At each level, the time taken is O(n).
There are log n levels.
So, the total time complexity is:

O(n) * O(log n) = O(n log n)

*/

function mergeSort(array) {
  // Base case: if the array has only one element, it is already sorted
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively divide and merge
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays by comparing elements from both arrays
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // If there are any remaining elements in the left or right array, add them
  return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
