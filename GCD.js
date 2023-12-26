let a = 5;
let b = 6;
function findGCD(a, b) {
  if (a <= 0) return -1;
  if (b <= 0) return -1;
  let t;
  if (b > a) {
    t = a;
    a = b;
    b = t;
  }
  t = a % b;
  while (t !== 0) {
    a = b;
    b = t;
    t = a % b;
  }
  return b;
}

let result = findGCD(a, b);
console.log("GCD:", result);
