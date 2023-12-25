const type = (argument) => {
  return typeof argument;
};

console.log(type("123"));
console.log(type(123));
console.log(type(true));
console.log(
  type(function () {
    return;
  })
);
console.log(type({ 1: "Haris", 2: "Burhan", 3: "Maheen" }));
var talha;
console.log(type(talha));
