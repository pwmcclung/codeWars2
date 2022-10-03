var findDigit = function(num, nth){
    if (nth <= 0){
      return -1
    } 
    let nummy = "" + Math.abs(num);
    let ans =  nummy.slice(nummy.length - nth, nummy.length - nth + 1) * 1   
    return ans
  }