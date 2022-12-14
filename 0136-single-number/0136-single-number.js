/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = []
    let sec = []
    for(let i=0; i < nums.length; i++) {
        if(!seen.includes(nums[i])){
            seen.push(nums[i])   
        } else {
            sec.push(nums[i])
        }
    }
    for(let j = 0; j < nums.length; j++){
        if(!sec.includes(nums[j])){
            return nums[j]
        }
    }
};