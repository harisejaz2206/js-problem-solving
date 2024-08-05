const isPalindromeBetter = (string) => {
  let inArray = string.split("");
  let ptr1 = 0;
  let ptr2 = inArray.length - 1;

  while (ptr1 < ptr2 / 2) {
    if (inArray[ptr1] !== inArray[ptr2]) {
      return false;
    }
    ptr1++;
    ptr2--;
  }

  return true;
};

let string1 = "haris";
let string2 = "usmann";
let string3 = "maham";

console.log(isPalindromeBetter(string1));
console.log(isPalindromeBetter(string2));
console.log(isPalindromeBetter(string3));
