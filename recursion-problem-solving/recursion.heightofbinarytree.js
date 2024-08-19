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

  insertIterative(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      // root is null
      this.root = newNode;
    } else {
      let currentParentNode = this.root;
      while (true) {
        if (data < currentParentNode.data) {
          // insert on left
          if (currentParentNode.left === null) {
            currentParentNode.left = newNode;
            break;
          }
          currentParentNode = currentParentNode.left;
        } else {
          // insert on right
          if (currentParentNode.right === null) {
            currentParentNode.right = newNode;
            break;
          }
          currentParentNode = currentParentNode.right;
        }
      }
    }
  }

  height(root) {
    if (root === null) {
      return 0;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  height2(root) {
    if (root === null) {
      return 0;
    }

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(4);
tree.insertIterative(2);
tree.insertIterative(9);
tree.insertIterative(1);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

console.log("Height of binary tree:", tree.height2(tree.root));
