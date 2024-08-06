function containsDuplicate(array) {
  let arrayMap = {};
  array.forEach((element) => {
    arrayMap.hasOwnProperty(element)
      ? arrayMap[element]++
      : (arrayMap[element] = 1);
  });

  console.log("arrayMap:", arrayMap);

  for (const element in arrayMap) {
    if (arrayMap[element] > 1) {
      return true;
    }
    return false;
  }
}

function containsDuplicatePractice(array) {
  let numMap = {};

  array.forEach((element) => {
    numMap.hasOwnProperty(element) ? numMap[element]++ : (numMap[element] = 1);
  });

  for (const element in numMap) {
    if (numMap[element] > 1) {
      return true;
    }
    return false;
  }
}

var array1 = [1, 3, 4, 2, 6, 7, 4, 3, 1, 5];
var array2 = [1, 2, 3, 4, 5];
console.log(containsDuplicatePractice(array1));
