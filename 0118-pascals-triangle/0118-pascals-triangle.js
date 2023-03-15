/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows = [];
        rows.push([1], [1,1]);
        if(numRows >= 2){
            for(let i = 2; i < numRows; i++) {
                let arr = [1];
                for(let j = 0; j < i -1; j++){
                    let num = rows[rows.length -1][j] + rows[rows.length -1][j+1];
                    arr.push(num);
                }
                arr.push(1)
                rows.push(arr);
            }
        }else {
            return [[1]]
        }
    
    return rows;
};