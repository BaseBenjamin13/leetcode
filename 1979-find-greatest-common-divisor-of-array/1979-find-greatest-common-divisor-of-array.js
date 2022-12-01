/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let smallNum = Math.min(...nums)
    let bigNum = Math.max(...nums)
    for(let i = smallNum; i >= 1; i--){
        if(bigNum / i % 1 == 0 && smallNum / i % 1 == 0) return i;
    }
    return 1;
};