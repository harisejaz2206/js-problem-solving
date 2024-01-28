const maximum = (array, size, k) => {
  let i = 0;
  let j = 0;
  let MAX_INT = -10000;
  let dummyArray = [];
  let result = [];

  while (j < size) {
    dummyArray.push(array[j]);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      let maxNumber = Math.max(...dummyArray);
      result.push(maxNumber);
      dummyArray.shift(array[i]);
      i++;
      j++;
    }
  }
  return result;
};

let array = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maximum(array, 8, 3));
