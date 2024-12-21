const isPalindrome = (string) => {
  let reversed = string.split("").reverse().join("");

  return string === reversed;
};

const isPalindromeBetter = (string) => {
  let inArray = string.split("");
  console.log(inArray);

  return inArray;
};

let string1 = "haris";
let string2 = "usmann";
let string3 = "maham";

console.log(isPalindromeBetter(string1));
console.log(isPalindromeBetter(string2));
console.log(isPalindromeBetter(string3));
