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

  deleteNthFromEnd(head, n) {
    let current = head;
    let count = 0;
    while (current != null) {
      count += 1;
      current = current.next;
    }
    let toDelete = count - n + 1;

    let prev = head;
    let current2 = head.next;
    let count2 = 2;
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
console.log(list1.deleteNthFromEnd(list1.head, 2));
list1.displayList();
