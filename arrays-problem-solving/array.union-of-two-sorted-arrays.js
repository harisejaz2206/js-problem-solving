function unionBrute(array1, array2) {
  let unionArray = [];
  let unionMap = {};

  for (let i = 0; i < array1.length; i++) {
    unionMap.hasOwnProperty(array1[i])
      ? unionMap[array1[i]]++
      : (unionMap[array1[i]] = 1);
  }

  console.log(unionMap);
}
let array1 = [1, 1, 2, 3, 4, 5];
let array2 = [2, 3, 4, 4, 5, 6];
