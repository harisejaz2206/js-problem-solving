let stringToReverse = "The notorious conor mcgregor";

let splitArray = stringToReverse.split(" ");

console.log(splitArray); // [ 'The', 'notorious', 'conor', 'mcgregor' ]

// using forEach loop - this does not save the reveresed words anywhere
splitArray.forEach(function (word) {
  let reversedWord = word.split("").reverse().join("");
  console.log("using forEach loop: ", reversedWord);
});

// using map function to save into an array.
let reversedWords = splitArray.map((word) => {
  return word.split("").reverse().join("");
});

console.log("using map function: ", reversedWords);
