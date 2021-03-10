//https://leetcode.com/problems/word-break/

// var wordBreak = function (s, wordDict) {
//     let stack = [s]
//     while (stack.length) {
//         let word = stack.pop()
//         for (let i = word.length - 1; i >= 0; i--) {
//             let endFragment = word.slice(i)
//             let startFragment = word.slice(0, i)
//             if (wordDict.includes(endFragment)) {
//                 if(endFragment === word) return true
//                 stack.push(startFragment)
//             }
//         }
//     }
//     return false
// };

//tabulation

// var wordBreak = function (s, wordDict) {
//     let table = new Array(s.length + 1)
//     table[0] = true
//     for (let i = 0; i < table.length; i++) {
//         if(table[i]) {
//             for(let j = i + 1; j < table.length; j++) {
//                 if(wordDict.includes(s.slice(i,j))){
//                     table[j] = true
//                 }
//             }
//         }
//     }
//     return table[s.length] === true
// };

//memoization

var wordBreak = function (s, wordDict, memo = {}) {
    if(memo[s] !== undefined) return memo[s]
    if(wordDict.includes(s)) return true
    if(s.length === 0) return false
    for ( let i = 0; i < wordDict.length; i ++) {
        let searchWord = wordDict[i]
        if (s.startsWith(searchWord)) {
            const remainder = s.slice(searchWord.length)
            if (wordBreak(remainder, wordDict, memo)) {
                return true
            } else {
                memo[remainder] = false
            }
        }
    }
    return false
};
