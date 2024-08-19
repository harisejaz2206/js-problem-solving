const occ = (string) => {
  let occurences = {};

  string.split("").forEach((char) => {
    occurences.hasOwnProperty(char)
      ? occurences[char]++
      : occurences[char] == 1;
  });
};

console.log(occ("hello"));
