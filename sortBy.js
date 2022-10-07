function last(x){
    let arr = x.split(' ')
    let sorted = arr.sort((word1, word2) => word1.charCodeAt(word1.length-1) - word2.charCodeAt(word2.length-1))
    return sorted
   
  }