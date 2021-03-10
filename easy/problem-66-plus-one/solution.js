//https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let targetIndex = digits.length - 1
    digits[targetIndex]++
    let targetValue = digits[targetIndex]
    while (targetValue >= 10) {
        if (targetIndex-1 < 0) {
            digits[targetIndex] = 0;
            digits.unshift(1)
            break;
        } else {
                digits[targetIndex-1]++
        }
        digits[targetIndex] = 0;
        targetIndex--
        targetValue = digits[targetIndex]
    }
    return digits
};
