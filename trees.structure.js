class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(5);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(parentNode, newNode) {
    if (newNode.data < parentNode.data) {
      // new node data is greater than parent node data so we add to right side
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        this.insertNode(parentNode.left, newNode);
      }
    } else {
      // new node data is greater than parent node data so we add to right side
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        this.insertNode(parentNode.right, newNode);
      }
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
