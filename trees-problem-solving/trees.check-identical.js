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
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentParentNode = this.root;
      while (true) {
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

  height(root) {
    if (root === null) {
      return 0;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const tree = new BinaryTree();
tree.insertIterative(10);
tree.insertIterative(5);
tree.insertIterative(15);
tree.insertIterative(2);
// console.log("Binary Tree", JSON.stringify(tree, null, 2));
console.log("The height of this tree is: ", tree.height(tree.root));
