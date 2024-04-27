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
 * @return {number[]}
 */

//O(n) time and O(n) space where n is number of nodes
const rightSideView = (root) => {
  depth = 0;
  const rightNodes = [];

  const dfs = (root, rightNodes, depth) => {
    if (!root) return;

    if (depth === rightNodes.length) {
      rightNodes.push(root.val);
    }

    depth += 1;

    const rightSideNodes = dfs(root.right, rightNodes, depth);
    const leftSideNodes = dfs(root.left, rightNodes, depth);
  }
  
  dfs(root, rightNodes, depth);
  return rightNodes;
};