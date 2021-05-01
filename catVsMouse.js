function catMouse(x){
    let arr = x.split('')
    if (arr[1] == 'm' || arr[2] == 'm' || arr[3] == 'm'|| arr[4] == 'm'){
      return "Caught!"
    }else{
      return "Escaped!"
    }
    }