# Find the Height of a Binary

### Overview

This JavaScript file finds the height of a given binary tree.

## Setup

### Inputs

This program accepts the data structure of a binary tree, called `node`. Here, this binary tree is built using a JS class called `Node` (notice the uppercase).

### Outputs

This program outputs the height of the given binary tree as an integer.

### Assumptions

This program assumes:

1.  The maximum number of nodes in the tree is 10^5.
2.  The data type of the `data` attribute of each node is an integer.
3.  The input is a binary tree built using the same JS file's `Node` class.

## Implementation

### The Algorithm

This program uses an algorithm called `heightOfBinaryTree(node)`, which accepts the `node` parameter, which is actually a tree. Very simply, the function returns 0 if there is either no tree or only the root node, as a binary tree with one the root level is considered to have a height of 0. These are what are commonly called _base cases_.

Otherwise, it enters a set of recursions: one for each "side" of the binary tree. This repeatedly checks for the base cases, and if not, adds 1 to the height of the tree. After completely unwrapping from recursion, it then checks which is the largest of the two sides, then adds one to account for the root node.

### Pseudo Code

- If the node is `null`, return 0
- If the node is a leaf node, return 0 as well
  - A node is a leaf node is both the left and right of the node are `null`, which also qualify the root node as a leaf node.
- Else, calculate the height of the left and right sub trees
  - store the left sub tree height in `leftHeight`, the value being a recursive call to `heightOfBinaryTree(node.left)`
  - store the right sub tree height in `rightHeight`, the value being a recursive call to `heightOfBinaryTree(node.right)`
- return the maximum height plus 1

## Complexity

### Time

- The time complexity of this implementation is **O(n)**, where `n`
  is the number of nodes in the binary tree.
- This is because the function visits each node once and performs a constant amount of work per node (comparing the heights of the left and right subtrees).
- The recursive calls to `heightOfBinaryTree()` will visit each node exactly once, so the time complexity is **O(n)**.

### Space

- The space complexity of this implementation is **O(h)**, where `h` is the height of the binary tree.
- This is because the function uses the call stack to keep track of the recursive calls, and the maximum number of recursive calls on the stack at any given time is equal to the height of the binary tree.
- Worst case: the height of the tree is equal to the number of nodes `n`, so the space complexity would be **O(n)**.
- However, in a balanced binary tree, the height would be log(n), so the space complexity would be **O(log n)**.

## Scalability

Due to the overall complexity being **O(n)**, this implementation would be poor for very large trees or long-ish trees that are extremely unbalanced.

## Usage

To use this program, simple create JS or HTML document that passes a binary tree to `heightOfBinaryTree(node)`. This will return the height back to wherever called it in the first place.

To make a binary tree using the built-in Node class, simply refer to the example in the code. Otherwise, you may use your own implementation, so long as it creates a binary tree structure with the same attributes.

## Real World Application?

One example would be family trees: one could find the total generations in a family tree, from the provided ancestor all the way to the furthest leaf node, which may be some kind of second cousin twice removed or something.
