var nthterm = function(first, n , c){
    let arr = [first,]
    for (let i = 0; ; i++){
      first = first + c
      arr.push(first)
      if (i == n){
        return arr[i]
        break;
      }
    }
    
    }