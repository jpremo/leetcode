//https://leetcode.com/problems/coin-change-2/
// var change = function (amount, coins) {
//     let table = new Array(amount + 1).fill(0)
//     table[0] = 1
//     for (let i = 1; i < table.length; i++) {
//         let remainders = new Set()
//         let sum = 0;
//         coins.forEach(coin => {
//             if( coin <= i && !remainders.has(coin) ) {
//                 if(coins.includes(i-coin)) {
//                     sum += 1
//                 } else {
//                     remainders.add(i - coin)
//                 }
//             }
//         })
//         sum += Array(remainders).reduce((acc, el) => acc + el)
//         table[i] = sum
//     }
//     return table[amount]
// };

// var change = function (amount, coins, used = [], memo = {}) {
//     coins.forEach((coin) => {
//         if(coin < amount) {
//             used.push(coin)
//             change(amount-coin, coins, used, memo)
//         } else if (coin === amount) {
//             used.push(coin)
//             const sorted = used.sort().join('-')
//             memo[sorted] = true
//         }
//     })
//     return 0
// }

var change = function (amount, coins, memo = {}) {
    const key = amount
    if(key in memo) return 0 // memo[key]
    if(amount === 0) return 1
    if(amount < 0) return 0

    let possibilities = 0;
    for(let i = 0; i < coins.length; i++) {
        possibilities += change(amount-coins[i], coins, memo)
    }

    memo[key] = possibilities;
    console.log(memo)
    return possibilities
}


//answer from online
// var change = function (amount, coins) {
//     let n = coins.length

//     let dp = Array(amount + 1).fill(0)
//     dp[0] = 1

//     for (let c of coins) {
//         for (let i = 0; i <= amount; i++) {
//             if (i >= c) dp[i] += dp[i - c]
//         }
//     }

//     return dp[amount]
// }
