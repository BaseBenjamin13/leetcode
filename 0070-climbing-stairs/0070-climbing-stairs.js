/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr=[0,1,2];
    let i = 3
    while(i <= n){
        arr[i]=arr[i-1]+arr[i-2];
        i++
    }
    return arr[n];
};