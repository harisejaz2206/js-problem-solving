/*
Bubble Sort:

Time Complexity:
- Best Case: O(n) (Already sorted array)
- Average Case: O(n²)
- Worst Case: O(n²)

Space Complexity: O(1)

Description: Simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

*/

function bubbleSort(arr) {
    let n = arr.length;
    
    // Traverse through all elements in the array
    for (let i = 0; i < n - 1; i++) {
      // Last i elements are already in place
      for (let j = 0; j < n - i - 1; j++) {
        // Compare adjacent elements and swap if they are in the wrong order
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1] if arr[j] is larger, other don't do anything
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  
