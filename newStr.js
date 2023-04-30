function change(string){
  string = string.toLowerCase();
  let alphaBet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr ='';
  for (let i = 0; i < alphaBet.length; i++){
    if (string.includes(alphaBet[i])){
      newStr += '1';
    }else{
      newStr += '0';
    }
  }
  return newStr;
}