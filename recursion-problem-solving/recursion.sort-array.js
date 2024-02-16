// this is not for best time complexity. It is for understanding recursion for myself.
// Always think of the following two things: decisions, smaller input.
// Here I can't think of a decision so look for smaller input.

// Get your template ready
// 1. Base condition step
// 2. Hypothesis step: breaking down the problem which the induction step (main logic step) makes it work
// 3. Induction step: the piece of code which makes everything work

/**
 * Inserts a given element into a sorted array recursively.
 */
function insert(array, temp) {
  if (array.length === 0 || array[array.length - 1] <= temp) {
    array.push(temp);
    return;
  }
  let value = array[array.length - 1];
  array.pop();
  insert(array, temp);
  array.push(value);
}

/**
 * Sorts an array using recursion and the insertion sort algorithm. (Breaking it down)
 */
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
sort(array);
console.log("Sorted array:", array);
