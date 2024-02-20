function permutationWithSpaces(input, output, size) {
  if (input.length === size) {
    output = output.concat(input[0]);
    input = input.substring(1);
  }

  if (input.length === 0) {
    console.log(output);
    return;
  }

  let output1 = output;
  let output2 = output;
  output1 = output1 + " " + input[0];
  output2 = output + input[0];
  input = input.substring(1);

  permutationWithSpaces(input, output1, size);
  permutationWithSpaces(input, output2, size);
}
var input = "abc";
var output = "";
var size = input.length;

permutationWithSpaces(input, output, size);
