function add(array) {
  let sum = 0;
  array.forEach(function (element) {
    sum += element;
  });
  return sum;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(add(array));
