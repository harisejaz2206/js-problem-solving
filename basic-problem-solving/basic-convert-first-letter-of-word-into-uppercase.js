const convertToUppercase = (string) => {
  const splitArray = string.split(" ");
  console.log(splitArray);

  const uppercaseArray = splitArray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  console.log(uppercaseArray);
  return uppercaseArray.join(" ");
};

const result = convertToUppercase("the notorious conor mcgregor");
console.log(result);
