rotateOnePlaceBrute = (array) => {
  let first = array.shift();
  array.push(first);
  return array;
};

// time complexity: O(N) time
// space complexity: O(1) space complexity
rotateOnePlaceOptimal = (array) => {
  let temp = array[0];

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1];

    if (i == array.length - 1) {
      array.push(temp);
    }
  }
  return array;
};

let array = [1, 2, 3, 4, 5];
console.log(rotateOnePlaceOptimal(array));
