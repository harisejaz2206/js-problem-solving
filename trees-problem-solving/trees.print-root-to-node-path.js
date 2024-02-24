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

  solve(root, array, value) {
    if (root === null) {
      return false;
    }

    array.push(root.data);
    if (root.data === value) {
      return true;
    }

    if (
      this.solve(root.left, array, value) ||
      this.solve(root.right, array, value)
    ) {
      return true;
    }

    array.pop();
    return false;
  }

  // we will inorder traversal for this. We can use the rest as well but KIS (keep it simple)!
  rootToNodePath(root, value) {
    let array = [];
    if (root == null) {
      return array;
    }

    this.solve(root, array, value);
    return array;
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(2);
tree.insertIterative(1);
tree.insertIterative(9);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));
console.log(tree.rootToNodePath(tree.root, 1));
