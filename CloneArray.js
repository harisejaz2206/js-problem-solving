function clone(array) {
  var newArray = [];
  array.forEach((element) => {
    newArray.push(element);
  });
  return newArray;
}

function cloneUsingMap(array) {
  var newArray = array.map((e) => {
    return e;
  });
  return newArray;
}

var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [7, 8, 9, 10, 11, 12];

var newArrray1 = clone(array1);
console.log("new array 1", newArrray1);

var newArray2 = cloneUsingMap(array2);
console.log("new array 2", newArray2);
