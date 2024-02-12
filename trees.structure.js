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
      this.insertNode(this.root, node);
    }
  }

  insertNode(parentNode, newNode) {
    if (newNode.data < parentNode.data) {
      // insert on left
      if (parentNode.left === null) {
        parentNode.left = newNode;
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

  // Helper method to perform inorder traversal
  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.data);
      this.inorderTraversal(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(6);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

console.log("Inorder traversal:");
tree.inorderTraversal(tree.root);
