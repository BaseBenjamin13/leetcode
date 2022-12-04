/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    let max = -1
    for(let i=0; i < nums.length -2; i++){
        max = Math.max(nums[i], max)
        if(max > nums[i+2]) return false
    }
    return true;

};