function isVeryEvenNumber(n) {

  let numStr = String(n)
  while (numStr.length != 1){
    numStr = String(numStr.split('').reduce((x,y)=>x+y*1,0))
  }
  return numStr * 1 % 2 == 0
}