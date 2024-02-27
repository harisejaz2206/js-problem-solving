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

  checkPalindrome(head) {
    // 1. Find the middle of the linkedlist
    // 2. Reverse the second half of the linkedlist
    // 3. Compare the first half with the reversed second half

    // Step 1
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Step 2
    let head2 = this.reverseList(slow.next);

    let head1 = head;

    // Step 3
    while (head2 !== null) {
      if (head1.data !== head2.data) {
        return false;
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    return true;
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
list1.addNode(1);
// list1.displayList();
console.log("");
// list1.head = list1.reverseList(list1.head);
const isPalindrome = list1.checkPalindrome(list1.head);
console.log("You list is palindrome? : " + isPalindrome);
// list1.displayList();
