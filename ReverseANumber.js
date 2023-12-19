/**
 * Reverses a number by converting it to a string,
 * reversing the string, and converting it back to a number.
 *
 * @param {number} number - The number to be reversed.
 * @returns {number} The reversed number.
 */
const reverseANumber = (number) => {
  let numberInString = number.toString().split("").reverse().join("");
  console.log(typeof numberInString);
  return (numberInString = Number(numberInString));
};

/**
 * Reverses a number using a mathematical approach.
 *
 * @param {number} number - The number to be reversed.
 * @returns {number} The reversed number.
 */
const reverseANumber2 = (number) => {
  var reversed = 0;
  while (number > 0) {
    let remainder = number % 10; // 4
    reverse = reverse * 10 + remainder; // 4
    number = Math.floor(number / 10); // 123
  }
  return reversed;
};

console.log(reverseANumber(100));
console.log(reverseANumber(69));
console.log(reverseANumber(213));

console.log("\n\n");

console.log(reverseANumber(100));
console.log(reverseANumber(69));
console.log(reverseANumber(213));
