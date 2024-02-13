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
    console.log("inside");
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

  sumOfAllNodes(root) {
    let leftSum = 0;
    let rightSum = 0;
    if (root === null) {
      return 0;
    }
    leftSum = this.sumOfAllNodes(root.left);
    rightSum = this.sumOfAllNodes(root.right);
    return root.data + leftSum + rightSum;
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(4);
tree.insertIterative(2);
tree.insertIterative(9);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

console.log(tree.sumOfAllNodes(tree.root));
