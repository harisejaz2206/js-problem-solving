function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    let innerVar = "I am from inner function";
    console.log(outerVar); // Accessible, as outerVar is in the scope chain
  }

  innerFunction();
  console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
