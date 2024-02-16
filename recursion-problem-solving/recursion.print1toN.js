// Induction-base condition-hypothesis method

/*
Hypothesis step: 
Signature of the function. 
print(n) ->  n to 1 laake dega
print(n-1) -> (n-1) to 1 laake dega

Induction step:
what we need to do along with the recursive call
console.log(n)
 */

// print 1 to N
function printUpwards(n) {
  if (n == 1) {
    console.log(n);
    return;
  }
  print(n - 1);
  console.log(n);
}

// print N to 1
function printDownwards(n) {
  if (n == 1) {
    console.log(n);
    return;
  }
  console.log(n);
  print(n - 1);
}

printUpwards(7);
printDownwards(7);
