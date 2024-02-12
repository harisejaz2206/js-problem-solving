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
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }
  }

  insertNode(parentNode, newNode) {
    if (newNode.data < parentNode.data) {
      // insert on left
      if (parentNode.left === null) {
        parentNode.left = node;
      } else {
        this.insertNode(parentNode.left, newNode);
      }
    } else {
      // insert on right
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        this.insertNode(parentNode.right, newNode);
      }
    }
  }

  insertCombined(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentParentNode = this.root;
      while (true) {
        if (data < currentParentNode.left) {
          // put in left side of the parent node
          if (currentParentNode.left === null) {
            currentParentNode.left = newNode;
            break;
          }
          currentParentNode = currentParentNode.left;
        } else {
          if (currentParentNode.right === null) {
            currentParentNode.right = newNode;
            break;
          }
          currentParentNode = currentParentNode.right;
          // put in right
        }
      }
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
