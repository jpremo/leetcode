//https://leetcode.com/problems/reverse-integer/

// const reverse = function(x) {
//     let neg = ''
//     let rev = String(x).split('')
//     if(rev[0] === '-') {
//         rev = rev.slice(1)
//         neg = '-'
//     }

//     rev = rev.reverse().join('')
//     while(rev[0] === '0') {
//         rev = rev.slice(1)
//     }
//     let finalNum = Number(neg+rev)
//     if(finalNum < ((-2)**31) || finalNum > (2**31-1) ) {
//         return 0
//     }
//     console.log(finalNum, neg, rev)
//     return finalNum
// };

const reverse = function(x) {
    let str = String(x)
    let finalStr = ''
    for(let i = str.length-1; i >= 0; i--) {
        const num = str[i]
        if(num === '-') {
            finalStr = '-'+finalStr
            continue
        }
        finalStr = finalStr + num;
    }
    const finalNumber = Number(finalStr)
    if(finalNumber < ((-2)**31) || finalNumber > (2**31-1)) {
        return 0;
    }
    return finalNumber
};

reverse(-123)
