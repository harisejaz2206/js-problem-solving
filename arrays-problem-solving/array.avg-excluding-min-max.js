const averageExcludingMinMax = (array) => {
  if (array.length <= 2) {
    return null;
  }

  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

  array.forEach((element) => {
    if (element > max) max = element;
    if (element < min) min = element;

    sum += element;
  });

  return Math.ceil((sum - max - min) / array.length);
};

const arr = [5, 1, 9, 3, 7, 8];
console.log(averageExcludingMinMax(arr));
