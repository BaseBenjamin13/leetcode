/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maxNum = 0;
    let index = 0;
    for(let i=0; i < nums.length; i++){
        let num = 0;
        for(let j=0; j < nums.length; j++)
            if(nums[i] === nums[j]){
                num++
            }
        if(num > maxNum){
            maxNum = num;
            index = i;
        }
    }
    return nums[index];
};