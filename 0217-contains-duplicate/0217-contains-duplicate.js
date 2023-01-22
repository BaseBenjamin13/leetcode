/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }
    if(checkIfDuplicateExists(nums)){
        return true
    }
    else {
        return false
    }
};