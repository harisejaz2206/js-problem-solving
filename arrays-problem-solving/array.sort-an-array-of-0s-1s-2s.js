/*
1. brute force solution: we could use a technique like merge sort which will take (nLogN) time complexity and (N) space complexity
2. better: iterate once and have three variables each for 0s, 1s, and 2s. increment each variable as you iterate. Then run a fop loop for each variable.
3. optimal: Dutch National Flag Algorithm
*/

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var sortColors = function (nums) {
  let n = nums.length;
  var low = 0;
  var mid = 0;
  var high = n - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
};

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
