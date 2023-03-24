function balancedNum(number){ 
  let arr = Array.from(number.toString(), Number);
   let len = Math.round(arr.length /2)
   if (arr.length < 3){return 'Balanced'}
  let left = []
 let right = []
 if (arr.length % 2 != 0){
   left.push(arr.slice(0, len -1))
   right.push(arr.slice(len,))
 } else if (arr.length % 2 ==0){
   left.push(arr.slice(0,len-1))
   right.push(arr.slice(len+1,))
 }
  let lefRed = left.flat().reduce((a,b) => a + b,0)
  let ritRed = right.flat().reduce((a,b) => a + b,0)
  
  if (lefRed== ritRed){
    return 'Balanced'
  }else if (lefRed != ritRed){
    return 'Not Balanced'
  }

  }
