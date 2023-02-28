function arithmeticSequenceElements(a, d, n) {
let arr = []
let start = a
if (d == 0){
  for (let i = 0; i < n; i++){
    arr.push(a)
  }
}
  if (d > 0 ){
    for (let i = 0; i< n; i++){
      
      arr.push(start)
      start = start + d
    }
  }
  if (d < 0){
    for (let i = n; i >0; i--){
      arr.push(start)
      start = start + d
    }
  }
 return arr.join(', ')
}