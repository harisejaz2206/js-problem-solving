function reverseArray(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

function rotateByKPlacesRight(array, k) {
  let n = array.length;
  k = k % n;
  reverseArray(array, 0, n - 1); // Reverse the entire array
  reverseArray(array, 0, k - 1); // Reverse the first k elements
  reverseArray(array, k, n - 1); // Reverse the remaining elements
  return array;
}

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateByKPlacesRight(array, k));
