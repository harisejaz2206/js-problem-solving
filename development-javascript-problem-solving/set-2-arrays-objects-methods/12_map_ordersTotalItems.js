// Question 12: `map` - Nested Mapping
// Given an array of orders, where each order has an array of items, use `map` to create a new array of orders where each order includes the total number of items.

const orders = [
  { id: 1, items: ["apple", "banana"] },
  { id: 2, items: ["orange"] },
  { id: 3, items: ["pear", "grape", "melon"] }
];
// Your code here

console.log(orders.map(order => {
  let count = order.items.length

  return {
    ...order,
    count: count
  }
}))