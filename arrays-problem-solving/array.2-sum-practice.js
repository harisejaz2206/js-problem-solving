const twoSum = (array, target) => {
  let numMap = {};

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i]; // 14 - 2
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[array[i]] = i
  }
};

const array = [2, 7, 12, 15];
const target = 14;
console.log(twoSum(array, target));
