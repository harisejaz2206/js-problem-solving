/*
Problem statement
You are given two non-negative numbers 'num1' and 'num2' represented in the form of linked lists.

The digits in the linked lists are stored in reverse order, i.e. starting from least significant digit (LSD) 
to the most significant digit (MSD), and each of their nodes contains a single digit.

Calculate the sum of the two numbers and return the head of the sum list.
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(initialData) {
    this.head = new Node(initialData);
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  displayList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList(1); // Initial data for the first node
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.deleteNode(1);

console.log("Linked List:");
linkedList.displayList();
