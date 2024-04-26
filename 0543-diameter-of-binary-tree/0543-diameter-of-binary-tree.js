/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //O(n) time and O(h) avg space where n is the number of total nodes and h is the height of the tree
const diameterOfBinaryTree = (root) => {
  const maxDiameter = [0];
  getDiameter(root, maxDiameter);
  return maxDiameter[0];
};

function getDiameter(root, maxDiameter) {
  if (!root) return 0;

  const leftPath = getDiameter(root.left, maxDiameter);
  const rightPath = getDiameter(root.right, maxDiameter);

  maxDiameter[0] = Math.max(maxDiameter[0], leftPath + rightPath);

  return Math.max(leftPath, rightPath) + 1;
}