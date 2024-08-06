const findLeaders = (arr) => {
  const leaders = [];
  let maxRight = arr[arr.length - 1];

  // The last element is always a leader
  leaders.push(maxRight);

  // Iterate from the second last element to the first
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      // If the current element is greater than the max on the right, it's a leader
      leaders.unshift(arr[i]);
      maxRight = arr[i];
    }
  }

  return leaders;
};

const findLeadersPractice = (array) => {
  let leaders = [];
  let maxRight = array[array.length - 1];
  leaders.push(array[array.length - 1]);

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > maxRight) {
      leaders.unshift(array[i]);
      maxRight = array[i];
    }
  }
  return leaders;
};
// Example usage:
const array = [11, 2, 3, 10, 1, 4];
const leaders = findLeadersPractice(array);

console.log("Leaders:", leaders);
