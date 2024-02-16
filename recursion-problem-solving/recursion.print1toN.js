// Induction-base condition-hypothesis method

function print(n) {
  if (n == 1) {
    console.log(n);
    return 1;
  }
  print(n - 1);
  console.log(n);
}

print(7);
