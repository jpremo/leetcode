//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (nums) {
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let spliceWidth = 0;
        let j = i + 1;
        while(nums[j] === num) {
            spliceWidth++
            j++
        }
        nums.splice(i+1, spliceWidth)
    }
    return nums.length
};
