/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = nums
    // function checkIfDuplicateExists(arr) {
    //     return new Set(arr).size !== arr.length
    // }
    // if(checkIfDuplicateExists(arr)){
    //     return true
    // }
    // else {
    //     return false
    // }
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false
};