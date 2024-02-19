// const subset = (input, output, powerSets, index) => {
//   if (index >= input.length) {
//     powerSets.push(output.slice()); // Push a copy of the output array
//     return;
//   }

//   // exclude
//   subset(input, output, powerSets, index + 1);

//   // include
//   output.push(input[index]);
//   subset(input, output, powerSets, index + 1);
//   output.pop();
// };

// let input = "abc";
// let output = [];
// let powerSets = [[]];
// let index = 0;

// subset(input, output, powerSets, index);
// console.log("power sets", powerSets);

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
