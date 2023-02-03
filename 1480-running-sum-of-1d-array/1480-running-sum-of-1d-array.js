/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        let temp = 0;
        for(let j = 0; j <= i; j++){
            temp += nums[j]
        }
        arr.push(temp);
    }
    return arr
};