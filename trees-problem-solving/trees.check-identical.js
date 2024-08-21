class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = null;
  }

  insertIterative(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentParentNode = this.root;
      while (true) {
        // insert on left
        if (data < currentParentNode.data) {
          if (currentParentNode.left === null) {
            currentParentNode.left = node;
            break;
          }
          currentParentNode = currentParentNode.left;
        } else {
          // insert on right
          if (currentParentNode.right === null) {
            currentParentNode.right = node;
            break;
          }
          currentParentNode = currentParentNode.right;
        }
      }
    }
  }

  checkIfIdentical(rootOne, rootTwo) {
    /* 1. Check if both roots are null*/
    if (rootOne === null || rootTwo === null) {
      return true;
    } else if (rootOne.left !== null && rootOne.left !== null) {
      /* 2. Both roots are not null so comnparing the trees*/
      let leftCheck = this.checkIfIdentical(rootOne.left, rootTwo.left);
      let rightCheck = this.checkIfIdentical(rootOne.right, rootTwo.right);

      let value = rootOne.data === rootTwo.data;

      if (value && leftCheck && rightCheck) {
        return true;
      } else {
        return false;
      }
    } else {
      /* 3. One is null, one is not (rest of the false cases) */
      return false;
    }
  }
}

const treeOne = new BinaryTree();
treeOne.insertIterative(5);
treeOne.insertIterative(2);
treeOne.insertIterative(10);
treeOne.insertIterative(15);

const treeTwo = new BinaryTree();
treeTwo.insertIterative(5);
treeTwo.insertIterative(2);
treeTwo.insertIterative(10);
treeTwo.insertIterative(15);
// treeTwo.insertIterative(1);
// console.log("Binary Tree", JSON.stringify(tree, null, 2));
// console.log("The height of this tree is: ", tree.height(tree.root));

console.log(
  "THe two binary trees are identical",
  treeOne.checkIfIdentical(treeOne.root, treeTwo.root)
);
