/*

Insertion Sort:

Time Complexity:
- Best Case: O(n) (Nearly sorted array)
- Average Case: O(n²)
- Worst Case: O(n²)

Space Complexity: O(1)

Description: Builds the final sorted array one item at a time by comparing the current element to the already sorted portion and inserting it in the correct position.
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; // The current element to be placed in the correct position
      let j = i - 1;
  
      // Move elements of arr[0...i-1] that are greater than key to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the key in its correct position
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [12, 11, 13, 5, 6];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
  