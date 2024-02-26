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

  addTwoNumbers(head1, head2) {
    let temp1 = head1;
    let temp2 = head2;
    let dummyNode = new Node(-1);
    let current = dummyNode;
    let carry = 0;

    while (temp1 != null || temp2 != null) {
      sum = carry;
      if (temp1) {
        sum = sum + temp1.data;
      }
      if (temp2) {
        sum = sum + temp2.data;
      }

      let newNode = new Node(sum % 10);
      carry = sum / 10;
      current.next = newNode;
      current = current.next;

      if (temp1) {
        temp1 = temp1.next;
      }
      if (temp2) {
        temp2 = temp2.next;
      }
    }

    if (carry) {
      let newNode = new Node(carry);
      current.next = newNode;
    }
    return dummyNode.next;
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
console.log("List 1:");
list1.displayList();
console.log("");
const list2 = new LinkedList(4);
list2.addNode(5);
list2.addNode(6);
console.log("List 2:");
list2.displayList();

addTwoNumbers(list1.head, list2.head);
