function occ(string) {
  let occurences = {};

  string.split("").forEach((char) => {
    occurences.hasOwnProperty(char)
      ? occurences[char]++
      : (occurences[char] = 1);
  });

  return occurences;
}

function areAnagrams(string1, string2) {
  const occurences1 = occ(string1);

  const occurences2 = occ(string2);

  for (const char in occurences1) {
    if (occurences1[char] !== occurences2[char]) {
      return false;
    }
  }
}

console.log(occ2("hello"));
