const occ = (string) => {
  let occurences = {};

  string.split("").forEach((char) => {
    occurences.hasOwnProperty(char)
      ? occurences[char]++
      : (occurences[char] = 1);
  });

  return occurences;
};

const occurencesOfAnagram = (string, pattern) => {
  let i = 0;
  let j = 0;
  let k = pattern.split("").length;
  let size = string.split("").length;

  let array = string.split("");
  let anagram = pattern.split("");

  let occurencesOfAnagram = occ(pattern);
  let keyCount = Object.keys(occurencesOfAnagram).length;

  let anagramCount = 0;
  console.log("anagram count", anagramCount);

  while (j < size) {
    if (occurencesOfAnagram.hasOwnProperty(array[j])) {
      occurencesOfAnagram[array[j]]--;
      if (occurencesOfAnagram[array[j]] === 0) {
        keyCount--;
      }

      console.log(occurencesOfAnagram);
      console.log("key count debug", keyCount);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (keyCount === 0) {
        anagramCount++;
      }

      if (occurencesOfAnagram.hasOwnProperty(array[i])) {
        occurencesOfAnagram[array[i]]++;
        if (occurencesOfAnagram[array[i]] > 0) {
          keyCount++;
        }
      }
      i++;
      j++;
    }
  }
  return anagramCount;
};

console.log(occurencesOfAnagram("aabaabaa", "abaa"));
