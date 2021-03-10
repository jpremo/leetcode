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

var wordBreak = function (s, wordDict) {
    let table = new Array(s.length + 1)
    table[0] = true
    for (let i = 0; i < table.length; i++) {
        if(table[i]) {
            for(let j = i + 1; j < table.length; j++) {
                if(wordDict.includes(s.slice(i,j))){
                    table[j] = true
                }
            }
        }
    }
    return table[s.length] === true
};
