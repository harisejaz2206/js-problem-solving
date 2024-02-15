class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = null;
  }

  insertIterative(data) {
    let node = new Node(data);
    if (root === null) {
      this.root = node;
    } else if (this.root.left === null) {
      while (true) {
        let currentParentNode = this.root;
        // insert on left
        if (data < currentParentNode.data) {
          if (currentParentNode.left === null) {
            currentParentNode.left = node;
            break;
          }
          currentParentNode = currentParentNode.left;
        } else {
          if (currentParentNode.right === null) {
            currentParentNode.right = node;
            break;
          }
          currentParentNode = currentParentNode.right;
        }
      }
    }
  }
}

let tree = new BinaryTree();
tree.insertIterative(tree.root);
