/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = []
    let sec = []
    nums.forEach(function(num) {
        if(!seen.includes(num)){
            seen.push(num)   
        } else {
            sec.push(num)
        }
    });
    for(let i = 0; i < nums.length; i++){
        if(!sec.includes(nums[i])){
            return nums[i]
        }
    }
};