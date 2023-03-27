function roundIt(n){
    let arr = String(n).split('.')
    if(arr[0].length < arr[1].length){
      return Math.ceil(n)
    }else if(arr[0].length > arr[1].length){
      return Math.floor(n)
    }else if(arr[0].length == arr[1].length){
      return Math.round(n)
    }
    
  }