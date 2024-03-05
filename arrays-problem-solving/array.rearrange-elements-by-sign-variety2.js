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
    for (let i = negativeCount; i < positives.length; i++) {
      answerArray[index] = positives[i];
      index++;
    }
  } else {
    for (let i = 0; i < positiveCount; i++) {
      answerArray[i * 2] = positives[i];
      answerArray[i * 2 + 1] = negatives[i];
    }

    let index = positiveCount * 2;
    for (let i = positiveCount; i < negatives.length; i++) {
      answerArray[index] = negatives[i];
      index++;
    }
  }

  return answerArray;
};

let array = [-1, 2, 3, 4, -3, 1];
console.log(rearrangeVariety2(array));
