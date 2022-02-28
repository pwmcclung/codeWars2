function isTriangle(a,b,c){
    let newArr = []
    newArr.push(a, b, c)
    
    let sorted = newArr.sort(function(a, b) {return a - b})
   
    if ((sorted[0] + sorted[1]) > sorted[2]){
      return true
    }else{
     return false;
      }
  }