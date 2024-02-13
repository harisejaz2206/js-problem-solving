const occurrences = (array) => {
  console.log("array: " + array);
  let occ = {};

  array.forEach((element) => {
    occ[element] ? occ[element]++ : (occ[element] = 1);
  });
  return Object.keys(occ).length;
};

const minimumRepitition = (array, size, k) => {
  let i = 0;
  let j = 0;
  let dummyArray = [];
  let resultantArray = [];
  let minimumRepitition = 100000;

  while (j < size) {
    dummyArray.push(array[j]);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      let repititions = occurrences(dummyArray);
      console.log("repititions", repititions);
      if (repititions < minimumRepitition) {
        resultantArray = [...dummyArray];
        minimumRepitition = repititions;
      }
      dummyArray.shift();
      i++;
      j++;
    }
  }
  return resultantArray;
};

let array = [1, 2, 1, 5, 5, 5, 3, 4];
console.log(occurrences(minimumRepitition(array, 7, 3)));
