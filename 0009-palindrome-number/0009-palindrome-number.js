/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = x.toString()
    for(let i = 0; i < y.length / 2; i++){
        if(y[i] !== y[y.length - (i+1)]){
            return false
        }
        
    }
    return true
};