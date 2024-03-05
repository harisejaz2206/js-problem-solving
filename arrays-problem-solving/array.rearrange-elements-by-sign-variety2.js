/*
Problem statement
There is an array ‘A’ of size ‘N’ with an equal number of positive and negative elements.

Without altering the relative order of positive and negative numbers, you must return an array of alternative positive and negative values.

Note:

Start the array with a positive number. 
For example

Input:
A = [1, 2, -4, -5], N = 4
Output:
1 -4  2 -5
Explanation: 
Positive elements = 1, 2
Negative elements = -4, -5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
*/

// The logic is correct but getting extra elements in the answer array. Logic is alright though.
const rearrangeVariety2 = (array) => {
  let n = array.length;
  let positives = [];
  let negatives = [];
  let answerArray = [];

  for (let i = 0; i < n; i++) {
    if (array[i] > 0) {
      positives.push(array[i]);
    } else if (array[i] < 0) {
      negatives.push(array[i]);
    }
  }
  console.log("positives", positives);
  console.log("negatives", negatives);
  positives.push(...negatives);

  let negativeCount = negatives.length;
  let positiveCount = positives.length;

  if (positiveCount > negativeCount) {
    for (let i = 0; i < negativeCount; i++) {
      answerArray[i * 2] = positives[i];
      answerArray[i * 2 + 1] = negatives[i];
    }

    let index = negativeCount * 2;
    for (let i = negativeCount; i < positiveCount; i++) {
      answerArray[index] = positives[i];
      index++;
    }
  } else {
    for (let i = 0; i < positiveCount; i++) {
      answerArray[i * 2] = positives[i];
      answerArray[i * 2 + 1] = negatives[i];
    }

    let index = positiveCount * 2;
    for (let i = positiveCount; i < negativeCount; i++) {
      answerArray[index] = negatives[i];
      index++;
    }
  }

  return answerArray;
};

let array = [-1, 2, 3, 4, -3, 1];
console.log(rearrangeVariety2(array));
