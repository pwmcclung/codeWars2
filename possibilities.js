function isAllPossibilities(x){
    let sorted = x.sort(function(a,b) {return a - b})
    let newArr = []
    for(let i = 0; i <= Math.max(...x); i++){
      newArr.push(i)
    }
    
     return   x.length ?newArr.every((e,i) =>e === x[i] && newArr.length === x.length):false
    
   }