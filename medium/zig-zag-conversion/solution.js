//https://leetcode.com/problems/zigzag-conversion/
var convert = function (s, numRows) {
    let grid = Array(numRows).fill('').map(() => Array(Math.ceil(s.length / numRows)).fill(''))
    let row = 0;
    let column = 0;
    let columnChange = false;
    let characterCount = 0
    while(characterCount < s.length) {
        if(columnChange === false) {
            grid[row][column] = s[characterCount]
            row ++
        } else {
            grid[row][column] = s[characterCount]
            column ++
            row --
        }

        if(columnChange) {
            if (row < 0) {
                columnChange = false;
                row = numRows > 1 ? 1 : 0;
            }
        } else {
            if(row >= numRows) {
                columnChange = true;
                column ++
                row = Math.max(row-2, 0)
            }
        }
        characterCount ++
    }

    const result = grid.flat().join('')
    return result
};
