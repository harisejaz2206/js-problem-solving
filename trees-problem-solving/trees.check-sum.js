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

  // Check if left tree + right is equals to root node. Check for all nodes
  sum(root) {
    if (root === null) {
      return 0;
    }

    return this.sum(root.left) + this.sum(root.right) + root.data;
  }

  isSum(root) {
    if (root === null || (root.left === null && root.right === null)) {
      return true;
    }

    let leftSum = this.sum(root.left);
    let rightSum = this.sum(root.right);

    if (
      root.data === leftSum + rightSum &&
      isSumTree(root.left) &&
      isSumTree(root.right)
    ) {
      return true;
    }
    return false;
  }
}

const tree = new BinaryTree();
tree.root = 6;
tree.root.left = 4;
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

console.log(tree.checkSum(tree.root));
