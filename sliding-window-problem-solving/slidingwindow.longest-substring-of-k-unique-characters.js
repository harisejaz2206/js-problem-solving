const uniqueCharacters = (string) => {
  let occurrences = {};
  string.split("").forEach((element) => {
    occurrences.hasOwnProperty(element)
      ? occurrences[element]++
      : (occurrences[element] = 1);
  });
  return Object.keys(occurrences).length;
};

const longestSubstring = (string, k) => {
  // string: a a b a c b e b e b e
  let map = {};
  let i = 0;
  let j = 0;
  let array = string.split("");
  console.log("array: " + array);
  let size = array.length;
  console.log("size: " + size);
  let answer = -100;

  while (j < size) {
    map.hasOwnProperty(array[j]) ? map[array[j]]++ : (map[array[j]] = 1);
    console.log("Current map:", map);
    if (Object.keys(map).length < k) {
      j++;
    } else if (Object.keys(map).length === k) {
      let longest = j - i + 1;
      if (longest > answer) {
        answer = longest;
      }
      j++;
    } else if (Object.keys(map).length > k) {
      while (Object.keys(map).length > k) {
        console.log("to delete", array[i]);
        map[array[i]]--;
        if (map[array[i]] === 0) {
          delete map[array[i]];
        }
        i++;
      }
      j++;
    }
  }
  return answer;
};

let string = "aabacbebebe";
console.log(longestSubstring(string, 3));
