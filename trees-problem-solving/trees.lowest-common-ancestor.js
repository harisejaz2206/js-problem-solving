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

  solve(root, value, array) {
    if (root === null) {
      return false;
    }
  }

  findPath(root, value) {
    let array = [];
    if (root === null) {
      return array;
    }
    solve(root, value, array);
  }

  lowestCommonAncestor(root) {}
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(2);
// tree.insertIterative(1);
tree.insertIterative(9);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

console.log("Binary tree balanced: ", tree.checkIfBalanced(tree.root));
