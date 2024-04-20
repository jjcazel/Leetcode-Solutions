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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

// O(n) time and O(n) space where n represents the number of nodes
function delNodes(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const forest = [];

    function dfs(node, isRoot) {
        if (!node) return null;
        let deleted = toDeleteSet.has(node.val);
        if (isRoot && !deleted) forest.push(node);
        node.left = dfs(node.left, deleted);
        node.right = dfs(node.right, deleted);
        return deleted ? null : node;
    }

    dfs(root, true);
    return forest;
};