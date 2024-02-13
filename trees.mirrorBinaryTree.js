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

  mirror(root) {
    if (root === null) {
      return null;
    }
    let left = this.mirror(root.left);
    let right = this.mirror(root.right);

    root.left = right;
    root.right = left;

    return root;
  }
}

const tree = new BinaryTree();
tree.insertIterative(2);
tree.insertIterative(1);
tree.insertIterative(3);
tree.insertIterative(4);
console.log("Before mirror binary tree:", JSON.stringify(tree, null, 2));

console.log("--------------------------------");
tree.mirror(tree.root);
console.log("After mirror binary tree:", JSON.stringify(tree, null, 2));
