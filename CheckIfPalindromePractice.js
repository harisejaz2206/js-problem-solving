const isPalindrome = (string) => {
  let reversed = string.split("").reverse().join("");

  return string === reversed;
};

let string1 = "haris";
let string2 = "usmann";
let string3 = "maham";

console.log(isPalindrome(string1));
console.log(isPalindrome(string2));
console.log(isPalindrome(string3));
