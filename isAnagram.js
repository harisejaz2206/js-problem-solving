const isAnagram = (string1, string2) => {
  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");

  if (string1 === string2) {
    return true;
  }
  return false;
};

let string1 = "haris";
let string2 = "sirah";

console.log(isAnagram(string1, string2));
