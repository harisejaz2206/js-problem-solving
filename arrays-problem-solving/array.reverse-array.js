function reverse(array) {
  let ptr1 = 0;
  let ptr2 = array.length - 1;

  while (ptr1 < ptr2) {
    let temp = array[ptr1];
    array[ptr1] = array[ptr2];
    array[ptr2] = temp;
    ptr1++;
    ptr2--;
  }
}
let array = [1, 2, 3, 4, 5];
console.log("before:", array);
reverse(array);
console.log("after:", array);
