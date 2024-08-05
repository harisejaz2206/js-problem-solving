const removeDuplicates = (array) => {
  let uniqueElements = [];

  array.forEach((element) => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
  });
  return uniqueElements;
};

const array = [2, 7, 11, 15, 2, 4, 2, 11, 5, 2, 8, 9];
console.log(removeDuplicates(array));
