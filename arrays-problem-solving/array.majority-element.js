var majorityElement = function (array) {
  let arrayMap = {};
  let size = Math.floor(array.length / 2);
  console.log(size);
  array.forEach((element) => {
    arrayMap[element] ? arrayMap[element]++ : (arrayMap[element] = 1);
  });
  for (const element in arrayMap) {
    if (arrayMap[element] > size) {
      return element;
    }
  }
};

var array1 = [3, 2, 3];
var array2 = [2, 2, 1, 1, 1, 2, 2, 2];
console.log(majorityElement(array2));
