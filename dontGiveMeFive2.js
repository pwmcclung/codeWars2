function dontGiveMeFive(start, end){
  
    let count = 0
  for (let i = end; i >=start;i--){
    if (!/5/.test(i)){
      count++
    }  
    }
    
   return count
  }

