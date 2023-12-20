const occ = (string) => {
  let occurrences = {};
  string.split("").forEach((element) => {
    occurrences.hasOwnProperty(element)
      ? occurrences[element]++
      : (occurrences[element] = 1);
  });
  return occurrences;
};

console.log(occ("hello"));
