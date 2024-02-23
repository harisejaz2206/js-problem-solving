/*
Question: Write code for removing duplicates in the array and return the number of elements which were unique.
*/

/*
• Time complexity: to insert into an array, it takes LogN so time complexity is O(NLogN). 
Plus to return unique elements it will take O(N) so O(NLogN + N)

• Space complexity: suppose all were unique elements, so you would need O(N) space.
*/
// brute force approach!
function removeDuplicates(array) {
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }
  return set.size;
}

let array = [1, 2, 3, 3, 4, 4, 5, 1, 6, 7, 2, 4, 5, 2];
console.log(removeDuplicates(array));
