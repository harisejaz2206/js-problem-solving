// if you keep track of the minimal value on the left side of the current element, it would be good.
function bestTime(array) {
  let n = array.length;
  let minimumOnLeft = array[0];
  let profit = 0;
  for (let i = 0; i < array.length; i++) {
    cost = array[i] - minimumOnLeft;
    profit = Math.max(profit, cost);
    minimumOnLeft = Math.min(minimumOnLeft, array[i]);
  }
  return profit;
}

let array = [7, 1, 5, 3, 6, 4];
console.log(bestTime(array));
