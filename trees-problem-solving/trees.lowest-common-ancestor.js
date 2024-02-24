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

  lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
      return root;
    }

    let leftNode = new Node(lowestCommonAncestor(root.left, p, q));
    let rightNode = new Node(lowestCommonAncestor(root.right, p, q));

    if (leftNode === null) {
      return right;
    } else if (rightNode === null) {
      return left;
    } else {
      // both left and right are not null so this is our answer
      return root;
    }
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(2);
tree.insertIterative(1);
tree.insertIterative(9);

let p = new Node(2);
let q = new Node(1);

lowestCommonAncestor(tree.root, p, q);
