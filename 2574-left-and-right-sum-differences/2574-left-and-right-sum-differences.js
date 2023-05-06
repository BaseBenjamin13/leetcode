/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let leftSum = [0];
    let rightSum = [0];
    let leftNums = nums;
    let rightNums = nums;
    for(let i = 0; i < nums.length -1; i++){
        if(i == 0) {
            leftSum.push(nums[i]);
            rightSum.unshift(nums[nums.length -1]);
        }else {
            leftNums = nums;
            leftNums = leftNums.slice(0,i+1);
            leftNums = leftNums.reduce((partialSum, a) => partialSum + a, 0);
            leftSum.push(leftNums);
            rightNums = nums;
            rightNums = rightNums.slice(-i -1);
            rightNums = rightNums.reduce((partialSum, a) => partialSum + a, 0);
            rightSum.unshift(rightNums);
        }
    }
    for(let x = 0; x < nums.length; x++){
        let num = leftSum[x] - rightSum[x];
        if(num < 0) num *= -1;
        nums[x] = num;
    }
    return nums;
};