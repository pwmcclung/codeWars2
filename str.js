function hasOneChar(s) {
  let arr = s.split('');
  let newWord = String(arr[0]).repeat(s.length);
  if (newWord == s){
    return true
  }else{
    return false
  }
  
}