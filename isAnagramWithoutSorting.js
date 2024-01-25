const occ = (string) => {
  let occurences = {};

  string.split("").forEach((char) => {
    occurences.hasOwnProperty(char)
      ? occurences[char]++
      : (occurences[char] = 1);
  });

  return occurences;
};

const isAnagram = (string1, string2) => {
  let string1_occ = occ(string1);
  console.log(string1_occ);
  let string2_occ = occ(string2);
  console.log(string2_occ);

  for (let char in string1_occ) {
    string1_occ[char] !== string2_occ[char];
    return false;
  }
  return true;
};

console.log(isAnagram("haris", "sssirah"));
