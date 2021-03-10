//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const min = 1
    const max = nums.length
    const numObj = {}
    const returnArr = []
    nums.forEach((num) => numObj[num] = true)
    for(let i = min; i <= max; i++) {
        if(!numObj[i]) {
            returnArr.push(i)
        }
    }
    return returnArr
};
