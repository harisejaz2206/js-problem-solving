function subset(input, output) {
  if (input.length === 0) {
    console.log(output);
    return;
  }

  let output1 = output;
  let output2 = output;

  output2 = output2.concat(input[0]);
  input = input.substring(1);

  subset(input, output1);
  subset(input, output2);
}

let input = "abc";
let output = "";
subset(input, output);
