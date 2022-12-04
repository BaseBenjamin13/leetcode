/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let conNums = [...nums]
    for (let i=0; i < nums.length; i++){
        conNums[i + nums.length] = nums[i];
    }
    return conNums;
}