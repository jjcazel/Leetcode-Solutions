/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let numIslands = 0
    let visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (isIsland(row, col, grid, visited)) {
                numIslands++;
            }
        }
    }

    return numIslands;
};

const isIsland = (row, col, grid, visited) => {
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;

    if (grid[row][col] === "0") return false;

    const position = row + ',' + col;
    if (visited.has(position)) {
        return false;
    }
    visited.add(position);

    isIsland(row + 1, col, grid, visited);
    isIsland(row - 1, col, grid, visited);
    isIsland(row, col + 1, grid, visited);
    isIsland(row, col - 1, grid, visited);

    return true; 
}