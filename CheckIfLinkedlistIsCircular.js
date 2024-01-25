class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircularLinkedList(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // The list is circular
    }
  }

  return false; // The list is not circular
}

// Example usage:
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

const result = isCircularLinkedList(node1);
console.log(result); // Output: true
