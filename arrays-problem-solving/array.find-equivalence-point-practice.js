const equivalencePoint = (array) => {
  let totalSum = 0;
  let rightSum = 0;
  let leftSum = 0;

  array.forEach((element) => {
    totalSum += element;
  });
  rightSum = totalSum;

  for (let i = 0; i < array.length; i++) {
    rightSum -= array[i];
    console.log("rightSum: ", rightSum);

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += array[i];
    console.log("leftSum: ", leftSum);
    console.log("===");
  }
  return -1;
};

let array = [1, 2, 3, 4, 3, 2, 1];
console.log(equivalencePoint(array));
