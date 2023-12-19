const checkPalindrome = (string) => {
  var cleanedStr = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  var reversedString = cleanedStr.split("").reverse().join("");
  return reversedString === string;
};

console.log(checkPalindrome("mahamaham"));
console.log(checkPalindrome("maha"));
console.log(checkPalindrome("usman"));
console.log(checkPalindrome("poop"));
