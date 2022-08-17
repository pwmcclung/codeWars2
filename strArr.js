function modifyMultiply (str,loc,num) {
    let arr = str.split(' ')
    let spot = arr[loc]
    
    let strArr = []
    for (let i = 0; i < num -1; i++){
      strArr.push(spot + '-')
    }
     strArr.push(spot)
    return strArr.join('')
    } 