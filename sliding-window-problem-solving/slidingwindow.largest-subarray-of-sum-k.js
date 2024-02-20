const largestSubarray = (array, k) => {
  // let k represent  the sum to be achieved
  let size = array.length;
  let i = 0;
  let j = 0;
  let sum = 0;
  let largest = -10000;

  while (j < size) {
    sum += array[j];
    if (sum < k) {
      j++;
    }
    if (sum === k) {
      let windowSize = j - i + 1;
      if (windowSize > largest) {
        largest = windowSize;
      }
      j++;
    }
    if (sum > k) {
      while (sum > k) {
        sum -= array[i];
        i++;
      }
      j++;
    }
  }
  return largest;
};

let array = [4, 1, 1, 1, 2, 3, 5];
let k = 5;

console.log(largestSubarray(array, 5));
