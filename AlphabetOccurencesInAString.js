function occ(string) {
  let occurences = {};
  string.split("").forEach((element) => {
    occurences.hasOwnProperty(element)
      ? occurences[element]++
      : (occurences[element] = 1);
  });
  return occurences;
}

console.log(occ("hello"));
