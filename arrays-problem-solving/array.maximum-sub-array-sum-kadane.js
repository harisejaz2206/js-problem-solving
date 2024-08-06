function kadaneBrute(array) {
  let n = array.length;
  let max = -1000;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += array[k];
        max = Math.max(max, sum);
      }
    }
  }
  return max;
}

// whatever the sum was for the previous subarray, just add the next element. Time complexity: O(N^2)
function kadaneBetter(array) {
  let n = array.length;
  let max = -1000;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += array[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

// in this approach, you iterate over the array and leave out the elements that are less than zero. So if the sum < 0 in each iteration, you reinitialize the sum to 0.
function kadaneOptimalWithSubarray(array) {
  let ansStart = -1;
  let ansEnd = -1;
  let start = -1;
  let max = Number.MIN_SAFE_INTEGER;
  let n = array.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (sum === 0) {
      start = i;
    }
    sum += array[i];

    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

const kadaneOptimalWithoutSubarray = (array) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum > max) {
      max = sum;
    }

    // next pe janay se pehle check karenge ke sum zero se kam toh nahi hai, agar hai toh sum ko 0 krdo because negative aage nai
    // leke janay because it will lower the sum in future;
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

const kadaneOptimalWithSubarrayPractice = (array) => {
  let max = -Infinity;
  let sum = 0;
  let ansStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < array.length; i++) {
    // start the index here since we might have a potential
    if (sum === 0) {
      ansStart = i;
    }
    sum += array[i];

    if (sum > max) {
      ansEnd = i;
      max = sum;
    }

    // next pe janay se pehle check karenge ke sum zero se kam toh nahi hai, agar hai toh sum ko 0 krdo because negative aage nai
    // leke janay because it will lower the sum in future;
    if (sum < 0) {
      sum = 0;
    }
  }
  return [ansStart, ansEnd];
};

let array = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(kadaneOptimalWithSubarrayPractice(array));
