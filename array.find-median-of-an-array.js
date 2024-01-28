const findMedian = (array) => {
  let duplicateArray = array.slice().sort((a, b) => a - b);
  console.log(duplicateArray);

  let length = array.length;
  console.log(length / 2);

  if (length % 2 === 0) {
    // Array length is even
    let middle1 = duplicateArray[length / 2 - 1];
    let middle2 = duplicateArray[length / 2];
    return Math.floor((middle1 + middle2) / 2);
  } else {
    let middle = duplicateArray[Math.floor(length / 2)];
    return middle;
  }
};

const median = findMedian([4, 8, 1, 6, 9, 10]);
console.log("the median is:", median);
