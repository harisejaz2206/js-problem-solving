function containsDuplicate(array) {
  let arrayMap = {};
  array.forEach((element) => {
    arrayMap.hasOwnProperty(element)
      ? arrayMap[element]++
      : (arrayMap[element] = 1);
  });
}
