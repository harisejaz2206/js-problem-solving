function rearrangeBrute(array) {
  let n = array.length;
  let positives = [];
  let negatives = [];
  for (let i = 0; i < n; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    }
    positives.push(array[i]);
  }
  positives.concat(negatives);

  return positives;
}

let array = [3, 1, -2, -5, 2, -4];

console.log(rearrangeBrute(array));
