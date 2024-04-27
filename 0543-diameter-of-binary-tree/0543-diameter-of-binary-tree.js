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
const diameterOfBinaryTree = (root) => {
  let maxDiameter = [0];
  getMaxDiameter(root, maxDiameter);
  return maxDiameter[0];
};

const getMaxDiameter = (root, maxDiameter) => {
  if (!root) return 0;

  const leftPathCount = getMaxDiameter(root.left, maxDiameter);
  const rightPathCount = getMaxDiameter(root.right, maxDiameter);

  maxDiameter[0] = Math.max(maxDiameter[0], leftPathCount + rightPathCount);

  return Math.max(leftPathCount, rightPathCount) + 1;
}