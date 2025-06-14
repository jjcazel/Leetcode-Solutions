/**
 * @param {number[][]} grid
 * @return {number}
 */

const maxAreaOfIsland = (grid) => {
    const visited = new Set();
    let maxIslandSize = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const currIslandSize = exploreIsland(grid,row, col, visited);
                if (currIslandSize > maxIslandSize) maxIslandSize = currIslandSize;
            }
        }
    }    

    return maxIslandSize;
};

const exploreIsland = (grid, row, col, visited) => {
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return 0;

    if (grid[row][col] === 0) return 0;

    const position = row + ',' + col;
    if (visited.has(position)) return 0;
    visited.add(position);

    let size = 1;

    size += exploreIsland(grid, row + 1, col, visited);
    size += exploreIsland(grid, row - 1, col, visited);
    size += exploreIsland(grid, row, col + 1, visited);
    size += exploreIsland(grid, row, col - 1, visited);

    return size;
}