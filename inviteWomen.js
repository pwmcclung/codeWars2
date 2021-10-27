function inviteMoreWomen(L) {
    let countW = 0
    let countM = 0
    for (let i = 0; i < L.length; i++){
      if (L[i] ===-1){
        countW ++
      }else{
        countM ++
      }
    }
    if (countW >= countM){
      return false
    }else {
      return true
    }
    
  }