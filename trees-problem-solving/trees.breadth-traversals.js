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

  levelOrder(root) {
    var queue = [];
    // we can use shift and push methods for queue
    queue.push(root);
    queue.push(null);

    while (queue.length > 0) {
      // take the front of the queue, dequeue, and check if it null or node
      let temp = queue[0];
      queue.shift();

      if (temp === null) {
        console.log("");
        if (queue.length > 0) {
          queue.push(null);
        }
      } else {
        console.log(temp.data);
        if (temp.left) {
          queue.push(temp.left);
        }
        if (temp.right) {
          queue.push(temp.right);
        }
      }
    }
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
tree.levelOrder(tree.root);
