/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let num = n;
    while(true){
        if(num % 2 == 0){
            return num;
        }else{
            num += num;
        }
    }
};