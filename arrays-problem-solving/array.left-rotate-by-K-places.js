const rotateByKPlaces_usingJS = (array, k) => {
  let n = array.length;
  if (n === 0) return array;
  k = k % n;

  let temp = array.splice(0, k);
  console.log("Array:", array);
  array = [...array, ...temp];
  return array;
};

const rotateByKPlacesBrute = (array, k) => {
  let n = array.length;
  let j = 0;
  let temp = [];
  for (let i = 0; i < k; i++) {
    temp.push(array[i]);
  }

  for (let i = k; i < array.length; i++) {
    array[i - k] = array[i];
  }

  for (let i = n - k; i < array.length; i++) {
    array[i] = temp[j];
    j++;
  }
  return array;
};

function reverseArray(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

function rotateByKPlacesOptimal(array, k) {
  let n = array.length;
  k = k % n;
  reverseArray(array, 0, k - 1);
  reverseArray(array, k, n - 1);
  reverseArray(array, 0, n - 1);

  return array;
}

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateByKPlacesOptimal(array, k));
