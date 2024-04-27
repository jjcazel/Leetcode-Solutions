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
    let maxDiameter = 0;

    const getMaxDiameter = (root) => {
      if (!root) return 0;

      const leftDepth = getMaxDiameter(root.left);
      const rightDepth = getMaxDiameter(root.right);

      maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

      return Math.max(leftDepth, rightDepth) + 1;
    }

    getMaxDiameter(root);
    return maxDiameter;
};