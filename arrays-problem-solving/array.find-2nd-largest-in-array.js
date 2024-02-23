/*
1. brute force: sort the array and use a for loop from n-2 to 0 and check if array[i] != largest and put that in 
                variabe called secondLargest. That will contain the second largest.
    • Time complexity for sorting: O(Nlog N) and for-loop iteration in worst case is O(N) 

2. better approach: use two variables: largest, and secondLargest. 
    • Time complexity for sorting: O(N) + O(N) for each iteration of the array.

*/

function secondLargestBrute(array) {
  array = array.sort();
  let largest = array[array.length - 1];
  console.log(largest);
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] != largest) {
      console.log("The second largest is: ", array[i]);
      break;
    }
  }
}

function secondLargestBetter(array) {
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > secondLargest && array[i] < largest) {
        secondLargest = array[i];
      }
    }
    // the reason this would not work in one for-loop is due to the fact the maybe the largest
    // has not yet been traversed so the answer will not be correct
  }
  console.log("largest", largest);
  console.log("second largest", secondLargest);
}

function secondLargestOptimal(array) {
  let largest = array[0];
  let secondLargest = -1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  console.log("largest", largest);
  console.log("second largest", secondLargest);
}

let array = [1, 6, 3, 8, 8, 8, 3, 6, 8, 9, 12, 8, 8, 4, 5];
secondLargestOptimal(array);
