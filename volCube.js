var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0){
      return false
    }
    if (side **3 == volume){
      return true
    }else{
      return false
    }
  };