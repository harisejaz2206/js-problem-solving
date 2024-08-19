function insert(array, element) {
  if (array.length === 0 || element >= array[array.length - 1]) {
    array.push(element);
    return;
  }

  let temp = array[array.length - 1];
  array.pop();
  insert(array, element);
  array.push(temp);
}

function sort(array) {
  if (array.length === 1) {
    return;
  }

  let temp = array[array.length - 1];
  array.pop();
  sort(array);
  insert(array, temp);
}

var array = [2, 3, 7, 6, 4];
console.log("Unsorted array:", array);
sort(array);
console.log("Sorted array:", array);
