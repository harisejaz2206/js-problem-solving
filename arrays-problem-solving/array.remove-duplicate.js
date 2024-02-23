/*
Question: Write code for removing duplicates in a sorted array and return the number of elements which were unique.
*/

/*
• Time complexity: to insert into an array, it takes LogN so time complexity is O(NLogN). 
Plus to return unique elements it will take O(N) so O(NLogN + N)

• Space complexity: suppose all were unique elements, so you would need O(N) space.
*/
// brute force approach!
function removeDuplicatesBrute(array) {
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }
  return set.size;
}

/*
• Time complexity: O(N) - one iteration of array
• Space complexity: O(1) - no extra space needed
*/
function removeDuplicatesOptimal(array) {
  let ptr1 = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[ptr1]) {
      //   ptr2 = array[i];
      array[ptr1 + 1] = array[i];
      ptr1++;
    }
  }
  console.log("previous:", array);
  array.length = ptr1 + 1;
  console.log("after:", array);
  return ptr1 + 1;
}

let array = [1, 1, 1, 2, 2, 2, 3, 3, 3];
console.log(removeDuplicatesOptimal(array));
