function onlyAddNumbers(array) {
  let sum = 0;
  array.forEach(function (number) {
    if (number % 1 === 0) {
      sum += number;
    }
  });
  return sum;
}

var array = [1, "haris", 2, 3, "hooriyah"];
console.log("Only add numbers result", onlyAddNumbers(array));
