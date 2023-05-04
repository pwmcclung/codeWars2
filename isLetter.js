String.prototype.isLetter = function() {
  let string = this.slice();
  if(string.length !== 1){
    return false;
  }
  if (string.match(/[a-zA-Z]/)){
    return true;
  }
  return false;
}