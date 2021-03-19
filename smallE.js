function smallEnough(a, limit){
    let newArr = []
    for (let i = 0; i<a.length; i++){
      if (a[i] > limit){
        newArr.push(false)
      }
    }
      if (newArr.length==0){
        return true
      }else{
        return false
      }
    }