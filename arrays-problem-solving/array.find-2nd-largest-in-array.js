/*
1. brute force: sort the array and use a for loop from n-2 to 0 and check if array[i] != largest and put that in 
                variabe called secondLargest. That will contain the second largest.
    • Time complexity for sorting: O(Nlog N) and for-loop iteration in worst case is O(N) 

2. 

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
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  console.log("largest", largest);
}

let array = [1, 6, 3, 8, 8, 8, 3, 6, 8, 8, 8, 4, 5];
secondLargestBrute(array);
