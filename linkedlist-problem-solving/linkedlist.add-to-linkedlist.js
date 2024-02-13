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

  deleteNode(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = null;

    while (current && current.data !== data) {
      previous = current.head;
      current = current.next;
    }

    if (!current) return;

    previous.next = current.next;
  }

  deleteNodePractice(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (!current) return;
    previous.next = current.next;
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
