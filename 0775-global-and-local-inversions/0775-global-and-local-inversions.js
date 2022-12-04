/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    // let local = 0;
    // let global = 0;
    let max = -1
    for(let i=0; i < nums.length -2; i++){
        // if(nums[i] > nums[i+1])local++;
        // exNums = nums.slice(i+2, nums.length)
        // if(exNums.length >= 1 && exNums.some(el => el < nums[i])){
        //     return false
        // }
        max = Math.max(nums[i], max)
        if(max > nums[i+2]) return false
            
    }
    return true;

};