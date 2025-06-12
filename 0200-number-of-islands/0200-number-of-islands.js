/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    let totalIslandCount = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            totalIslandCount += countIslands(grid, row, col, visited);
        }
    }

    return totalIslandCount;
};

const countIslands = (grid, row, col, visited) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    if (!rowInbounds || ! colInbounds) return false;

    if (grid[row][col] === '0') return false;

    const position = row + ',' + col;
    if (visited.has(position)) return false;
    visited.add(position);

    countIslands(grid, row - 1, col, visited);
    countIslands(grid, row + 1, col, visited);
    countIslands(grid, row, col - 1, visited);
    countIslands(grid, row, col + 1, visited);

    return true;
}