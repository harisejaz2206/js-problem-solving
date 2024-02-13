// Not to use the function below but it is works
function isInteger(number) {
  return Number.isInteger(number);
}

function isInteger2(number) {
  if (number % 1 === 0) {
    return true;
  }
  return false;
}
console.log("Number is integer:" + isInteger(12));
console.log("Number is integer:" + isInteger2(12.5));
console.log("Number is integer:" + isInteger2(23));
console.log("Number is integer:" + isInteger2(23.1));
console.log("Number is integer:" + isInteger2(69));
console.log("Number is integer:" + isInteger2(4));
