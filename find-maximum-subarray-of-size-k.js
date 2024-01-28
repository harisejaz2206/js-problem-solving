const maxSubarray = (array, size, k) => {
  let i = 0;
  let j = 0;
  let sum = 0;
  let max_sum = -10000;

  while (j < size) {
    sum += array[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      max_sum = Math.max(sum, max_sum);
      sum -= array[i];
      i++;
      j++;
    }
  }
  return max_sum;
};

let array = [5, 6, 2, 1, 7, 4, 5, 8];

console.log(maxSubarray(array, array.length, 3));
