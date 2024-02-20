permutationWithCaseChange = (input, output) => {
  if (input.length === 0) {
    console.log(output);
    return;
  }
  let output1 = output;
  let output2 = output;

  output1 = output + input[0];
  output2 = output + input[0].toUpperCase();

  input = input.substring(1);

  permutationWithCaseChange(input, output1);
  permutationWithCaseChange(input, output2);
};

var input = "ab";
var output = "";
permutationWithCaseChange(input, output);
