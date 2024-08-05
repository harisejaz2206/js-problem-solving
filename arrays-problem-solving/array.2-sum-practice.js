const twoSum = (nums, target) => {
  let numMap = {}; // we will be storing the element and its index in the map

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // 9 - 2 = 7
    if (numMap.hasOwnProperty(complement)) {
      return [i, numMap[complement]];
    }
    numMap[nums[i]] = i;
  }
  return -1;
};

const nums = [2, 7, 11, 15];
const target = 14;
console.log(twoSum(nums, target));
