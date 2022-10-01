/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(/[\s  ]+/);

    if(words[words.length - 1].length === 0){
        return words[words.length - 2].length;
    }else {
        return words[words.length - 1].length;
    }
    

};