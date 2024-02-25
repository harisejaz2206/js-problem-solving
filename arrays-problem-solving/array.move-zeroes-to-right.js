/*
There's a flaw in the logic due to the way you're iterating through the array and modifying
it simultaneously. When you splice an element out of the array, it changes the indices of subsequent elements, 
which can lead to skipping elements or processing the same element multiple times.
*/
function moveZeroesMyLogic(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] === 0) {
      let temp = array[i];
      array.splice(i, 1);
      array.push(temp);
    }
  }
  console.log(array);
}

/*
To correct this, you can iterate through the array from the end to the beginning. This way, when you 
splice out an element, it won't affect the indices of elements you haven't processed yet.

-> The time complexity of the provided moveZeroesMyLogicCorrected function is O(n^2), where n is the length of the input array. 
This is because for each element in the array, potentially all subsequent elements are shifted when a zero is 
encountered and moved to the end of the array.

-> The space complexity is O(1) because the algorithm operates in-place, meaning it doesn't use any extra space proportional 
to the size of the input array.
*/
function moveZeroesMyLogicCorrected(array) {
  let n = array.length;
  for (let i = n - 1; i > 0; i--) {
    if (array[i] === 0) {
      let temp = array[i];
      array.splice(i, 1);
      array.push(temp);
    }
  }
  console.log("my method", array);
}

function moveZeroesMyLogicBrute(array) {
  let temp = [];
  let zeroCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      temp.push(array[i]);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i <= zeroCount; i++) {
    temp.push(0);
  }
  console.log("brute", temp);
  return temp;
}

let array = [1, 3, 4, 0, 4, 6, 0, 0, 1, 3, 0, 3];
moveZeroesMyLogicCorrected(array);
moveZeroesMyLogicBrute(array);
