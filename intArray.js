function isIntArray(arr) {
  if (Array.isArray(arr) && arr.every(function(x) {return Math.floor(x) === x})){
    return true;
  }else{
    return false;
  }
  }
  