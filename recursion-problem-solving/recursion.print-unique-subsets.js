function subset(input, output, finalSet) {
  if (input.length === 0) {
    finalSet.add(output);
    // console.log(output);
    return;
  }

  let output1 = output;
  let output2 = output;

  output2 = output2.concat(input[0]);
  input = input.substring(1);

  subset(input, output, finalSet);
  subset(input, output2, finalSet);
}

let input = "aab";
let output = "";
let finalSet = new Set();

subset(input, output, finalSet);

let finalArray = [...finalSet];

console.log(finalArray);
