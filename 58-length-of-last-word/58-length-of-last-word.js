/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(/[\s  ]+/);
    let lengthOfLastWord;
    if(words[words.length - 1].length === 0){
        lengthOfLastWord = words[words.length - 2].length;
    }else {
        lengthOfLastWord = words[words.length - 1].length;
    }
    
    return lengthOfLastWord;
};