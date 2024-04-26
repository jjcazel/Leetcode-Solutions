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

//O(n) time and O(n) space
const averageOfSubtree = (root) => {
  let matchCount = 0;

  const getTreeAverages = (root) => {
    if (!root) return [0, 0];

    const leftNodes = getTreeAverages(root.left);
    const rightNodes = getTreeAverages(root.right);

    const [leftSum, leftCount] = leftNodes;
    const [rightSum, rightCount] = rightNodes;

    const nodeSum = leftSum + rightSum + root.val;
    const nodeCount = 1 + leftCount + rightCount;

    const avg = Math.floor(nodeSum / nodeCount);
    if (avg === root.val) matchCount++;

    return [nodeSum, nodeCount];
  }

  getTreeAverages(root);

  return matchCount;
};

