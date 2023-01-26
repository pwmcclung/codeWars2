function consecutive(arr, a, b) {
    let newA = arr.indexOf(a)
    let newB = arr.indexOf(b)
    if(Math.abs(newA - newB) === 1){
      return true
    }else{
      return false
    }
    }