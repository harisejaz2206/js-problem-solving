function linearSearch(array, element) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      index = i;
      break;
    }
  }
  return index;
}

let array = [6, 7, 8, 4, 1];
console.log(linearSearch(array, 4));
