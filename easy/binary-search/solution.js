var search = function (nums, target) {
    let min = 0;
    let max = nums.length-1
    while(max >= min) {
        let currentIdx = Math.floor((max-min) / 2) + min
        if(nums[currentIdx] > target) {
            max = currentIdx-1;
        } else if (nums[currentIdx] < target){
            min = currentIdx+1;
        } else {
            return currentIdx
        }
    }
    return (nums[max] === target) ? max : -1;
};
