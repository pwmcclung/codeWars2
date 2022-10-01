function duplicateElements(m, n) {
    let count = 0
      for (let i = 0; i < m.length; i++){
        for (let j = 0; j < n.length; j++){
          if (m[i] == n[j]){
            count++
          }
        }
      }
    if (count >0){
      return true
    }else{
      return false
    }
  }