class Node {
  constructor(node) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = 5;
  }

  logging() {
    console.log("Tree:", this.root);
  }
}

const tree = new BinaryTree();
tree.logging();
