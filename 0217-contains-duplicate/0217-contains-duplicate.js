/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = nums
    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }
    if(checkIfDuplicateExists(arr)){
        return true
    }
    else {
        return false
    }
};