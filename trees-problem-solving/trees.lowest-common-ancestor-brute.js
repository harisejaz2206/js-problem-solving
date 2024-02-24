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

    array.push(root.data);

    if (root.data === value) {
      return true;
    }

    if (
      this.solve(root.left, value, array) ||
      this.solve(root.right, value, array)
    ) {
      return true;
    }

    array.pop();
    return false;
  }

  findPath(root, value) {
    let array = [];
    if (root === null) {
      return array;
    }
    this.solve(root, value, array);
    return array;
  }

  //
  lowestCommonAncestor(array1, array2) {
    let size1 = array1.length;
    let size2 = array2.length;
    let lowestCommonAncestor = -1;

    let n = Math.abs(size1 - size2);

    for (let i = 0; i < n; i++) {
      if (array1[i] === array2[i]) {
        lowestCommonAncestor = array1[i];
      } else {
        break;
      }
    }
    console.log("lowest common ancestor:", lowestCommonAncestor);
  }
}

const tree = new BinaryTree();
tree.insertIterative(5);
tree.insertIterative(3);
tree.insertIterative(2);
tree.insertIterative(1);
tree.insertIterative(9);
// console.log("Binary Tree:", JSON.stringify(tree, null, 2));

let array1 = tree.findPath(tree.root, 2);
let array2 = tree.findPath(tree.root, 1);
console.log("array1:", array1);
console.log("array2:", array2);
tree.lowestCommonAncestor(array1, array2);
