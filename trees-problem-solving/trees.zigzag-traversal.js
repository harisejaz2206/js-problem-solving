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

  // we have to return an array
  levelOrder(root) {
    let result = [];
    if (root === null) {
      return result;
    }

    let queue = [];
    queue.push(root);
    let leftToRight = true;

    while (queue.length !== 0) {
      // Level each process
      let size = queue.length;
      let tempAns = [];
      for (let i = 0; i < size; i++) {
        let frontNode = queue.shift();
        queue.shift();
        let index = leftToRight ? i : size - i + 1;
        tempAns[index] = frontNode.data;

        if (frontNode.left) {
          queue.push(frontNode.left);
        }
        if (frontNode.right) {
          queue.push(frontNode.right);
        }
      }
      leftToRight = !leftToRight;
      result.push(...tempAns);
    }
    return result;
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

console.log("Level order traversal:");
console.log(tree.levelOrder(tree.root));
