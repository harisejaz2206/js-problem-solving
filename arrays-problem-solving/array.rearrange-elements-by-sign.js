/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

1. Every consecutive pair of integers have opposite signs.
2. For all integers with the same sign, the order in which they were present in nums is preserved.
3. The rearranged array begins with a positive integer.

Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
*/

// Approach 01: //Brute: we first iterate and add to our created positive and negatve array. Then concat them and you have all positives first followed by negatives. Then loop to n/2 and answer[2*i] = positives[i] and answer[2 * i + 1] = negatives[i]
function rearrangeBrute(array) {
  let n = array.length;
  let positives = [];
  let negatives = [];
  let answer = [];
  for (let i = 0; i < n; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    } else if (array[i] > 0) {
      positives.push(array[i]);
    }
  }
  positives.push(...negatives);

  for (let i = 0; i < n / 2; i++) {
    answer[2 * i] = positives[i];
    answer[2 * i + 1] = negatives[i];
  }
  return answer;
}

let array = [3, 1, -2, -5, 2, -4];

console.log(rearrangeBrute(array));
