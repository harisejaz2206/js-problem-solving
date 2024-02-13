const secondLargest = (array) => {
  array.sort((a, b) => a - b);
  let length = array.length;

  return array[length - 2];
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(secondLargest(array));
