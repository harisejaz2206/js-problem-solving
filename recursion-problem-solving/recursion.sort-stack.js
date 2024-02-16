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
function insert(stack, temp) {
  console.log("stack inside insert() function", stack);
  if (stack.length === 0 || stack[stack.length - 1] <= temp) {
    stack.push(temp);
    return;
  }
  let value = stack[stack.length - 1];
  stack.pop();
  insert(stack, temp);
  stack.push(value);
}

/**
 * Sorts an array using recursion and the insertion sort algorithm. (Breaking it down)
 */
function sortStack(stack) {
  if (stack.length === 1) {
    return;
  }

  let temp = stack[stack.length - 1];
  stack.pop();
  console.log("About to sort stack: " + stack);
  sortStack(stack);
  insert(stack, temp);
}

var stack = [5, 1, 0, 2];
sortStack(stack);
console.log("Sorted stack:", stack);
