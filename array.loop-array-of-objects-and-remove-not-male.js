var array = [
  { name: "Kendall", gender: "Female" },
  { name: "Haris", gender: "Male" },
  { name: "Minahil", gender: "Female" },
  { name: "Usman", gender: "Male" },
];

var count = 0;

// Count the number of males
// array.forEach(function (element) {
//   if (element.gender === "Male") {
//     count++;
//   }
// });

// Remove non-male elements from the array
for (var i = array.length - 1; i >= 0; i--) {
  if (array[i].gender !== "Male") {
    array.splice(i, 1);
  }
}

console.log("count", count);
console.log(array);
