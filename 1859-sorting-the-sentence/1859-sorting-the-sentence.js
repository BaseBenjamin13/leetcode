/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    arr = s.split(' ');
    let sentenceArr = s.split(' ');
    for(let i=0; i < arr.length; i++){
        let word = arr[i]
        let wordArr = word.split('')
        sentenceArr[Number(wordArr[wordArr.length -1]) -1] = word.slice(0, -1)
    }
    return sentenceArr.toString().replaceAll(',', ' ')
};