const minDifference = (array, size, k) => {
  let i = 0;
  let j = 0;
  let minDiff = 10000;
  let dummyArray = [];
  let resultArray = [];

  while (j < size) {
    dummyArray.push(array[j]);
    maxInSubarray = Math.max(...dummyArray);
    minInSubarray = Math.min(...dummyArray);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      console.log("dummyArray", dummyArray);
      let difference = maxInSubarray - minInSubarray;
      console.log("difference", difference);
      if (difference < minDiff) {
        console.log("true");
        resultArray.length = 0;
        resultArray.push(...dummyArray);
        console.log("resultArray", resultArray);
        minDiff = difference;
      }
      dummyArray.shift();
      i++;
      j++;
    }
  }
  return resultArray;
};

array = [1, 3, 5, 3, 6, 7, 8];
let size = 7;
let k = 3;

console.log(minDifference(array, size, k));
