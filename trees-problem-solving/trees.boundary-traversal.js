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

  traverseLeft(root, answer) {
    if (root == null || (root.left == null && root.right == null)) {
      return;
    }
    answer.push(root.data);
    if (root.left) {
      this.traverseLeft(root.left, answer);
    } else {
      this.traverseRight(root.right, answer);
    }
  }

  traverseLeaf(root, answer) {
    if (root === null) {
      return;
    }
    if (root.right === null && root.left === null) {
      answer.push(root.data);
      return;
    }

    this.traverseLeaf(root.left, answer);
    this.traverseLeaf(root.right, answer);
  }

  traverseRight(root, answer) {
    if (root === null || (root.left == null && root.right == null)) {
      return;
    }

    if (root.right) {
      this.traverseRight(root.right, answer);
    } else {
      this.traverseLeft(root.left, answer);
    }
    answer.push(root.data);
  }

  boundary(root, answer) {
    if (root === null) {
      return answer;
    }

    answer.push(root.data);
    this.traverseLeft(root.left, answer);

    this.traverseLeaf(root.left, answer);
    this.traverseLeaf(root.right, answer);

    this.traverseRight(root.right, answer);
    return answer;
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(4);
tree.insertIterative(2);
tree.insertIterative(9);
tree.insertIterative(12);
tree.insertIterative(1);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

let answer = [];
console.log(tree.boundary(tree.root, answer));
