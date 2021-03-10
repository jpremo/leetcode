//https://leetcode.com/problems/minimum-path-sum/
var minPathSum = function (grid, x = 0, y = 0, memo = {}) {
    let maxX = grid.length - 1
    let maxY = grid[0].length - 1
    if (memo[`${x}-${y}`] !== undefined) return memo[`${x}-${y}`]
    if (x === maxX && y === maxY) return grid[x][y]
    if (x > maxX || y > maxY) return Infinity
    const right = (x + 1 > maxX) ? Infinity : minPathSum(grid, x + 1, y, memo)
    const down = (y + 1 > maxY) ? Infinity : minPathSum(grid, x, y+1, memo)
    let minimum = grid[x][y] + Math.min(right, down)
    memo[`${x}-${y}`] = minimum
    return minimum
};
