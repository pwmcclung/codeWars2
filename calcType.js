function calcType(a, b, res) {
  if (a +  b === res){
    return 'addition'
  }else if (a - b === res){
    return 'subtraction'
  }else if (a * b === res){
    return 'multiplication'
  }else{
    return 'division'
  }
}