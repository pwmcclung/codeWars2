function isIsogram(str){
    str = str.toLowerCase()
    return str.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
  }
  