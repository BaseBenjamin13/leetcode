/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target > nums[nums.length -1]){
        return nums.length;
    }
    if(target < nums[0]){
        return 0
    }
    let length = nums.length;
    let halfLen = nums.length / 2;
    for(let i = 0; i < length; i++){
        if(nums[i] === target){
            return i
        }
        if(target > nums[halfLen] && i < nums[halfLen]){
            i = halfLen;
        } else if(target < nums[halfLen]){
            length = halfLen;
        }
        if(nums[i] < target && nums[i+1] > target){
            return i+1
        }
    }
};