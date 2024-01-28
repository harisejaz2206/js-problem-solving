// Question: find first negative number in every window of size K

const firstNegative = (array, size, k) => {
  let i = 0;
  let j = 0;
  let dummyArray = [];
  let resultantArray = [];

  while (j < size) {
    if (array[j] < 0) {
      dummyArray.push(array[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (dummyArray.length == 0) {
        resultantArray.push(0);
      } else {
        resultantArray.push(dummyArray[0]);
        if (array[i] === dummyArray[0]) {
          dummyArray.shift();
        }
        i++;
        j++;
      }
    }
  }
  return resultantArray;
};

let array1 = [5, -1, 6, -3, -1, 7, -8];
console.log(firstNegative(array1, 7, 3));
