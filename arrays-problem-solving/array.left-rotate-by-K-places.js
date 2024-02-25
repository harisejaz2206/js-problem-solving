const rotateByKPlaces_usingJS = (array, k) => {
  let n = array.length;
  if (n === 0) return array;
  k = k % n;

  let temp = array.splice(0, k);
  console.log("Array:", array);
  array = [...array, ...temp];
  return array;
};

const rotateByKPlaces = (array, k) => {
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

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateByKPlaces(array, k));
