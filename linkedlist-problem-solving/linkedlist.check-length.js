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

  checkLength(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
      count += 1;
      current = current.next;
    }
    return count;
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
list1.addNode(6);
list1.displayList();
const length = list1.checkLength(list1.head);
console.log("The count is " + length);
