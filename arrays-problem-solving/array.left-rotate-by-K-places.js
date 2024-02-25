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

function rotateByKPlacesOptimal(array, k) {
  let n = array.length;
  let i = 0;
  let ptr1 = 0;
  let ptr2 = k - 1;
  while (i < k && ptr1 < ptr2) {
    let temp = array[ptr1];
    array[ptr1] = array[ptr2];
    array[ptr2] = temp;
    ptr1++;
    ptr2--;
    i++;
  }

  let j = k;
  let ptr3 = k;
  let ptr4 = array.length - 1;
  while (j < n && ptr3 < ptr4) {
    let temp = array[ptr3];
    array[ptr3] = array[ptr4];
    array[ptr4] = temp;
    ptr3++;
    ptr4--;
    j++;
  }

  ptr1 = 0;
  ptr4 = array.length - 1;
  i = 0;
  while (i < n && ptr1 < ptr4) {
    let temp = array[ptr1];
    array[ptr1] = array[ptr4];
    array[ptr4] = temp;
    ptr1++;
    ptr4--;
    i++;
  }

  console.log(array);
}

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateByKPlacesOptimal(array, k));
