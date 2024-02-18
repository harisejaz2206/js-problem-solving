function insert(stack, element) {
  if (stack.length === 0) {
    stack.push(element);
    return;
  }
  let temp = stack[stack.length - 1];
  stack.pop();
  insert(stack, element);
  stack.push(temp);
}

function reverse(stack) {
  if (stack.length === 1) {
    return;
  }
  let temp = stack[stack.length - 1];
  stack.pop();
  reverse(stack);
  insert(stack, temp);
}

let stack = [5, 4, 3, 2, 1];
console.log("stack before reverse:", stack);
reverse(stack);
console.log("stack after reverse:", stack);
