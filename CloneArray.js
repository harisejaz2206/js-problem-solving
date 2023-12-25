function clone(array) {
  var newArray = [];
  array.forEach((element) => {
    newArray.push(element);
  });
  return newArray;
}

var array1 = [1, 2, 3, 4, 5, 6];

var newArrray1 = clone(array1);

console.log(newArrray1);
