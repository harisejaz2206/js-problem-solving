function printSubsets(str, index = 0, current = "") {
  const n = str.length;

  // Base case: if index reaches the length of the string, print current subset
  if (index === n) {
    console.log(current);
    return;
  }

  // Recursive case 1: Include the current character
  printSubsets(str, index + 1, current + str[index]);

  // Recursive case 2: Exclude the current character
  printSubsets(str, index + 1, current);
}

// Example usage:
const string = "abc";
console.log("Subsets of", string, ":");
printSubsets(string);
