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
  const occurences1 = occ(string1);
  const occurences2 = occ(string2);

  //  for...in: Iterates over the keys of an object!
  //  for...of: Iterates over the values of an iterable object!

  for (const char in occurences1) {
    if (occurences1[char] !== occurences2[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("haris", "sirah"));
