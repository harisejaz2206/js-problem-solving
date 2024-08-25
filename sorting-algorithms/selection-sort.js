/*

Selection Sort:

Time Complexity:
- Best Case: O(n²)
- Average Case: O(n²)
- Worst Case: O(n²)

Space Complexity: O(1)
- Description: Repeatedly selects the smallest element from the unsorted portion of the list and swaps it with the leftmost unsorted element.

*/

function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Assume the current index is the minimum
      let minIndex = i;
  
      // Check the rest of the array to find the smallest element
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the element at the current index
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
  