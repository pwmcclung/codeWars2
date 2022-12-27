function doubleEveryOther(a) {
    let newArr = []
    for (let i = 0; i < a.length; i++){
      if (i % 2 == 0){
        newArr.push(a[i])
      }else{
        newArr.push(a[i] * 2)
      }
    }
    return newArr
  }