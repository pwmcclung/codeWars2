function maxDiff(list) {
    if (list.length === 0 || list.length ===1){
      return 0
    }else{
      let max = Math.max(...list)
      
      let min = Math.min(...list)
     
      return max - min
    }
    
  };