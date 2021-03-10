function longestWord(stringOfWords){
    let arr = stringOfWords.split(' ')
    let sorted = arr.sort(function(a, b) {return a.length - b.length})
    return sorted[sorted.length - 1]
 }