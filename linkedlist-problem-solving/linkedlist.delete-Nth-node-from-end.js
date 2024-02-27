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

  deleteNthFromEnd(n) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current != null) {
      count += 1;
      current = current.next;
    }

    // Edge case: Out of bounds n
    if (n > count) {
      return this.head; // No modification needed
    }

    // Edge case: Negative n
    if (n <= 0) {
      return this.head; // No modification needed
    }

    let toDelete = count - n + 1;

    let prev = this.head;
    let current2 = this.head.next;
    let count2 = 2;

    if (toDelete === 1) {
      this.head = current2;
      return this.head;
    }

    while (current2.next !== null) {
      if (count2 !== toDelete) {
        prev = current2;
        current2 = current2.next;
        count2++;
      } else {
        console.log("true");
        prev.next = current2.next;
        break;
      }
    }
    return this.head;
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
list1.addNode(4);
list1.addNode(5);
list1.displayList();
list1.deleteNthFromEnd(5);
list1.displayList();
