//https://leetcode.com/problems/climbing-stairs/
// var climbStairs = function (n) {
//     let table = new Array(n+1).fill(0)
//     table[0] = 1;
//     table[1] = 1;
//     for(let i = 2; i < table.length; i ++) {
//         table[i] = table[i-1] + table[i-2]
//     }
//     return table[n]
// };

var climbStairs = function (n, memo = {}) {
    if(memo[n] !== undefined) return memo[n]
    if(n === 2) return 2;
    if(n === 1) return 1;

    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return memo[n]
};
