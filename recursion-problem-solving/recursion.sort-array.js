// this is not for best time complexity. It is for understanding recursion for myself.
// Always think of the following two things: decisions, smaller input.
// Here I can't think of a decision so look for smaller input.

// Get your template ready
// 1. Base condition step
// 2. Hypothesis step: breaking down the problem which the induction step (main logic step) makes it work
// 3. Induction step: the piece of code which makes everything work

function insert(array, temp) {
  // base condition
  if (array.length === 0 || array[array.length - 1] <= temp) {
    array.push(temp);
    return;
  }
  let value = array[array.length - 1];
  array.pop(value);
  insert(array, temp);
  array.push(value);
}

function sort(array) {
  if (array.length === 1) {
    return;
  }
  let temp = array[array.length - 1];
  array.pop(temp);
  sort(array, temp);
  insert(array, temp);
}

var array = [2, 3, 7, 6, 4, 5, 9];
sort(array);
console.log(array);
