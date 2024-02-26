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

  reverseList(head) {
    let prev = null;
    let current = head;

    while (current != null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }

    return prev;
  }

  checkPalindrome(head){
    let start = head;
    let temp = head;

    while()
  }

  displayList() {
    let current = this.head;
    let list = "";
    while (current) {
      list += `${current.data} -> `;
      current = current.next;
    }
    list += "null";
    console.log(list);
  }
}

const list1 = new LinkedList(1);
list1.addNode(2);
list1.addNode(3);
list1.displayList();
console.log("");
list1.head = list1.reverseList(list1.head);

list1.displayList();
