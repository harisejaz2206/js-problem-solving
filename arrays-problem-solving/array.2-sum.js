// 2-sum brute force
// Use two-for loops
function bruteForce(array, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(i, j);
        return;
      }
    }
    return "No numbers are valid";
  }
}

function twoSum(nums, target) {
  const numMap = {}; // HashMap to store elements and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      // If complement exists in the hashmap, return indices
      return [numMap[complement], i];
    }
    // Otherwise, store current element and its index in the hashmap
    numMap[nums[i]] = i;
  }
  // If no solution is found, return null or throw an error, depending on requirements
  return null;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(bruteForce(nums, target)); // Output: [0, 1] (Indices of elements that sum up to the target)
