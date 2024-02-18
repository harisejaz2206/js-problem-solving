function helper(stack, k) {
  // base condition
  if (k === 1) {
    stack.pop();
    return;
  }
  let temp = stack[stack.length - 1];
  stack.pop();
  helper(stack, k - 1);
  stack.push(temp);
}

function deleteMiddle(stack, size) {
  if (stack.length === 0) {
    return;
  }
  let k = Math.floor(size / 2 + 1);
  console.log("k:", k);
  helper(stack, k);
}

let stack = [6, 5, 4, 3, 2, 1];
console.log("stack before deleting middle", stack);
deleteMiddle(stack, 5);
console.log("stack before deleting middle", stack);
