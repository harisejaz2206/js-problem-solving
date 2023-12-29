const frequent = (array) => {
  let occurences = {};
  let maxCount = 0;
  let maxElement = null;

  array.forEach(function (item) {
    occurences.hasOwnProperty(item)
      ? occurences[item]++
      : (occurences[item] = 1);

    if (occurences[item] > maxCount) {
      maxCount = occurences[item];
      maxElement = item;
    }

    // var ans = Object.keys(occurences).reduce(function (acc, num) {
    //   return occurences[acc] > occurences[num] ? acc : num;
    // });
    // console.log("Answer:", ans);
  });

  console.log("Occurrences:", occurences);
  console.log("Element with the highest occurrences:", maxElement);
  return occurences;
};

// frequent([1, 2, 3, 2, 2, 3, 4, 5, 6, 1, 2, 3, 4]);
frequent([1, 2, 3, 2, 2, 3, 4, 5, 6, 1, 2, 3, 4, 4, 4, 2]);
