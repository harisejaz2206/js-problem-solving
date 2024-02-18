function insert(stack, element) {
  // base condition
  if (stack.length === 0) {
    stack.push(element);
    return;
  }
  let temp = stack[stack.length - 1];
  stack.pop();
  insert(stack, element);
  stack.push(element);
}

function reverse(stack) {
  if (stack.length === 1) {
    return;
  }
  let temp = stack[stack.length - 1];
  stack.pop();
  insert(stack, temp);
  stack.push(temp);
}

let stack = [5, 4, 3, 2, 1];
console.log("Stack before reversing", stack);
stack.reverse();
console.log("Stack after reversing", stack);
