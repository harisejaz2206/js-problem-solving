console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve();
});
promise.then(() => console.log(3));

console.log(4);


console.log("haris in innovent tech")

