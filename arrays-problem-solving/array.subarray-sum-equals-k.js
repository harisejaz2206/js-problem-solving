function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const sumMap = {};

  // Initialize the map with sum 0 and frequency 1
  sumMap[0] = 1;

  for (let num of nums) {
    sum += num;

    // Check if there exists a subarray ending at the current index
    // with sum equal to (sum - k), which means sum of elements from
    // some previous index to current index is k.
    if (sumMap.hasOwnProperty(sum - k)) {
      count += sumMap[sum - k];
    }

    // Update the frequency of current sum
    sumMap[sum] = (sumMap[sum] || 0) + 1;
  }

  return count;
}

// Example usage:
const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k)); // Output: 2
