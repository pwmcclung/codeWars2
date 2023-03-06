function firstToLast(str,c){
  let isIn = str.search(c)
  if (isIn < 0){
    return -1
  } else if (isIn >= 0){
    let first = str.indexOf(c)
    let last = str.lastIndexOf(c);
    return Math.abs(last) - Math.abs(first)
  } 
}