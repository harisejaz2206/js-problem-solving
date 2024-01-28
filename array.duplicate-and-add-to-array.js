function duplicate(array) {
  return array.concat(array);
}

var duplicatedArray = duplicate([1, 2, 3, 4, 5, 6]);
console.log(duplicatedArray);
