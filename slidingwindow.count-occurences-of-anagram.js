const occ = (string) => {
  let occurences = {};

  string.split("").forEach((char) => {
    occurences.hasOwnProperty(char)
      ? occurences[char]++
      : (occurences[char] = 1);
  });

  return occurences;
};

let string = "harisaaaarfface";
// console.log(occ(string));

const occurencesOfAnagram = (string, pattern) => {
  let i = 0;
  let j = 0;
  let k = pattern.split("").length;
  console.log("k", k);
  let size = string.split("").length;
  console.log("size", size);

  let array = string.split("");
  console.log("array", array);
  let anagram = pattern.split("");
  console.log("anagram", anagram);

  let occurencesOfAnagram = occ(pattern);
  let keyCount = Object.keys(occurencesOfAnagram).length;
  console.log(
    "occurences of anagram, key count",
    occurencesOfAnagram,
    keyCount
  );

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
