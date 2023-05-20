// The Node class for the binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Calculates the height of a binary tree starting from the given node.
 *
 * @param {Node} node - the root node of the binary tree
 * @return {number} the height of the binary tree
 */
function heightOfBinaryTree(node) {
  // If node is null, return 0
  if (node == null) {
    return 0;
  }
  // If node is a leaf node, return 0
  else if (node.left == null && node.right == null) {
    return 0;
  }
  // Else, calculate height of left and right subtrees, and return the maximum height plus 1
  else {
    let leftHeight = heightOfBinaryTree(node.left);
    let rightHeight = heightOfBinaryTree(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Example binary tree
let root = new Node(1);
root.left = new Node(8);
root.right = new Node(17);
root.left.left = new Node(3);
root.left.left.left = new Node(8);
root.left.left.right = new Node(5);
root.left.right = new Node(2);
root.right.left = new Node(14);
root.right.left.left = new Node(4);
root.right.left.right = new Node(6);

// Testing the function
console.log('Height of tree is: '+ heightOfBinaryTree(root)); // 3
