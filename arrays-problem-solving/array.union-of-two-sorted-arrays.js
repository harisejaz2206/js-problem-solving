function unionMyLogic(array1, array2) {
  let unionMap = {};
  let unionArray = [];

  for (let i = 0; i < array1.length; i++) {
    unionMap.hasOwnProperty(array1[i])
      ? unionMap[array1[i]]++
      : (unionMap[array1[i]] = 1);
  }

  for (let i = 0; i < array2.length; i++) {
    unionMap.hasOwnProperty(array2[i])
      ? unionMap[array2[i]]++
      : (unionMap[array2[i]] = 1);
  }

  for (let key in unionMap) {
    if (unionMap.hasOwnProperty(key)) {
      console.log("key: " + key);
      unionArray.push(parseInt(key));
    }
  }

  console.log(unionArray);
  return unionArray;
}

/*
Time complexity: O(n1LogN +n2LogN) + O(n1+n2)
Space complexity: O(n1+n2) + O(n1+n2)
*/
function unionBruteUsingSet(array1, array2) {
  let union = new Set();

  for (let i = 0; i < array1.length; i++) {
    union.add(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    union.add(array2[i]);
  }

  let unionArray = Array.from(union);
  console.log("union:", union);
  console.log("unionArray", unionArray);
}

function unionOptimal(array1, array2) {
  let n1 = array1.length;
  let n2 = array2.length;
  let i = 0;
  let j = 0;
  let unionArr = [];

  while (i < n1 && j < n2) {
    if (array1[i] < array2[j]) {
      if (
        unionArr.length === 0 ||
        array1[i] !== unionArr[unionArr.length - 1]
      ) {
        unionArr.push(array1[i]);
      }
      i++;
    } else if (array1[i] > array2[j]) {
      if (
        unionArr.length === 0 ||
        array2[j] !== unionArr[unionArr.length - 1]
      ) {
        unionArr.push(array2[j]);
      }
      j++;
    } else {
      if (
        array1[i] !== unionArr[unionArr.length - 1] ||
        unionArr.length === 0
      ) {
        unionArr.push(array1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < n1) {
    if (array1[i] !== unionArr[unionArr.length - 1] || unionArr.length === 0) {
      unionArr.push(array1[i]);
    }
    i++;
  }

  while (j < n2) {
    const lastElement = unionArr.slice(-1)[0];
    if (array2[j] !== lastElement || unionArr.length === 0) {
      unionArr.push(array2[j]);
    }
    j++;
  }
  return unionArr;
}

let array1 = [1, 1, 2, 3, 4, 5, 7, 8, 8];
let array2 = [2, 3, 4, 4, 5, 6];
console.log(unionOptimal(array1, array2));
