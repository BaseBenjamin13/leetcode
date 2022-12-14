/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = []
    let sec = []
    for(let i=0; i < nums.length -1; i++) {
        sec = nums.slice(i+1)
        seen = nums.slice(0, i)
        if(!sec.includes(nums[i]) && !seen.includes(nums[i])){
            return nums[i]
        }
    }
    return nums[nums.length -1]

};