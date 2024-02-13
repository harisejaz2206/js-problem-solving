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

  // in-order traversal
  inOrder(root) {
    if (root === null) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  // pre-order traversal
  preOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  // post-order traversal
  postOrder(root) {
    if (root === null) {
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
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

console.log("Inorder traversal:");
tree.inOrder(tree.root);

console.log("Preorder traversal:");
tree.preOrder(tree.root);

console.log("Postorder traversal:");
tree.postOrder(tree.root);
